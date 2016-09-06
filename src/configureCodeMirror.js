import CodeMirror from 'codemirror'
import { Up } from 'write-up'
import debounce from './debounce'
import throttle from './throttle'


export default function configureCodeMirror(editorContainer, documentContainer, tableOfContentsContainer) {
  const codeMirror = CodeMirror(editorContainer, {
    value: require('./editor.up'),
    lineNumbers: true,
    lineWrapping: true
  })

  configureSoftWrappedLinesToBeIndented(codeMirror)
  configureLivePreview(codeMirror, documentContainer, tableOfContentsContainer)
  configureSynchronizedScrolling(codeMirror, documentContainer)

  codeMirror.refresh()

  // TODO: Remove this hack and include the rendered HTML directly in index.html
  render(codeMirror.getValue(), documentContainer, tableOfContentsContainer)
  sourceMappedElements = documentContainer.querySelectorAll('[data-up-source-line]')
}


// NOTE: This collection represents shared state!
//
// This collection represents any element from the rendered document that has a source
// line number. In practice, this is a collection of every HTML element produced by an
// outline syntax node ("outline" essentially means "block-level").
//
// Every time we re-render the document, we'll update this collection.
//
// Whenever the user scrolls through the rendered document, we use this collection to
// scroll the CodeMirror editor to the line corresponding to the first element from this
// collection that is within the user's viewport.
//
// Likewise, whenever the user scrolls through the editor, we use this collection to
// scroll to the first element in the document produced by (or before) the first visible
// line in the editor.
let sourceMappedElements = []


function configureLivePreview(codeMirror, documentContainer, tableOfContentsContainer) {
  // We'll wait until the user is done typing before we re-render the document with their
  // changes. We consider the user to be done typing once 1 second has elapsed since their
  // last keystroke.
  codeMirror.on('change', debounce(codeMirror => {
    render(codeMirror.getValue(), documentContainer, tableOfContentsContainer)
    sourceMappedElements = documentContainer.querySelectorAll('[data-up-source-line]')
  }, 1000))
}


function render(markup, documentContainer, tableOfContentsContainer) {
  const result = Up.renderHtmlForDocumentAndTableOfContents(markup, {
    createSourceMap: true
  })

  documentContainer.innerHTML = result.documentHtml
  tableOfContentsContainer.innerHTML = result.tableOfContentsHtml
}


function configureSynchronizedScrolling(codeMirror, documentContainer) {
  const FPS_FOR_SCROLL_SYNCING = 60
  const SCROLL_SYNC_INTERVAL = 1000 / FPS_FOR_SCROLL_SYNCING

  // We need to watch out for feedback loops.
  //
  // Let's say the user scrolls to line 100 in the editor. Normally, we'd scroll into view
  // the rendered element produced by that line. However, let's also pretend that line 100
  // didn't produce any syntax nodes! It's a blank line between paragraphs.
  //
  // So we do the next best thing: we scroll into view the first element produced *after*
  // line 100: a paragraph produced by line 101. This unfortunately triggers the rendered
  // document's scroll event, which in turn determines that the editor should be scrolled
  // to line 101: the line that produced the paragraph. Uh-oh!
  //
  // To prevent this, whenever our code scrolls a container, we ignore the scroll events
  // from that container for a short window.
  let ignoringScrollEventsFromEditor = false
  let ignoringScrollEventsFromDocument = false

  const IGNORE_EVENT_PERIOD = SCROLL_SYNC_INTERVAL * 2

  // TODO: Ignore links

  addScrollEventListener(documentContainer, throttle(() => {
    if (ignoringScrollEventsFromDocument) {
      return
    }

    for (let i = 0; i < sourceMappedElements.length; i++) {
      const element = sourceMappedElements[i]

      // Is this the first outline element that's in view?
      if (element.getBoundingClientRect().top >= 0) {
        // Line numbers in Up start at 1.
        const lineIndex = element.dataset.upSourceLine - 1
        const editorLineY = codeMirror.charCoords({ line: lineIndex }, 'local').top

        codeMirror.scrollTo(null, editorLineY)
        console.log('DOC')
        ignoringScrollEventsFromEditor = true
        setTimeout(() => ignoringScrollEventsFromEditor = false, IGNORE_EVENT_PERIOD)

        return
      }
    }
  }, IGNORE_EVENT_PERIOD))

  addScrollEventListener(codeMirror.getScrollerElement(), throttle(() => {
    if (ignoringScrollEventsFromEditor) {
      return
    }

    // Line numbers in the CodeMirror editor start at 0. 
    const firstVisibleLineNumber = 1 + codeMirror.lineAtHeight(0, 'window')

    for (let i = 0; i < sourceMappedElements.length; i++) {
      const element = sourceMappedElements[i]

      // Is this the first outline element that was produced by (or after) the first visible
      // line in the editor?
      if (element.dataset.upSourceLine >= firstVisibleLineNumber) {
        element.scrollIntoView();

        ignoringScrollEventsFromDocument = true
        console.log('CM')
        setTimeout(() => ignoringScrollEventsFromDocument = false, IGNORE_EVENT_PERIOD)
        return
      }
    }
 }, IGNORE_EVENT_PERIOD))
}


// This is adapted from this demo: https://codemirror.net/demo/indentwrap.html
//
// It does not work when tabs are used for indentation, because CodeMirror handles
// tab characters using a special `<span class="cm-tab">` element. Luckily, our
// editor is conigured (by default) to use spaces for indentation.
//
// TODO: Replace leading tab characters on-paste
function configureSoftWrappedLinesToBeIndented(codeMirror) {
  const charWidth = codeMirror.defaultCharWidth()

  // This value is taken from the "PADDING" section of `codemirror.css`
  const BASE_PADDING = 4

  codeMirror.on('renderLine', (codeMirror, line, lineElement) => {
    const indentation = charWidth * CodeMirror.countColumn(line.text)

    // First, let's eliminate the natural indentation provided by the leading spaces themselves.
    lineElement.style.textIndent = `-${indentation}px`

    // Now, let's use padding to indent the entire soft-wrapped line!
    lineElement.style.paddingLeft = `${BASE_PADDING + indentation}px`
  })
}


  function addScrollEventListener(element, listener) {
    element.addEventListener('scroll', listener)
  }