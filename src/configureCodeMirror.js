import CodeMirror from 'codemirror'
import { Up } from 'write-up'
import debounce from './debounce'
import throttle from './throttle'


export default function configureCodeMirror(editorContainer, renderedDocumentContainer) {
  const codeMirror = CodeMirror(editorContainer, {
    value: require('./editor.up'),
    lineNumbers: true,
    lineWrapping: true
  })

  configureSoftWrappedLinesToBeIndented(codeMirror)
  syncScrollingBetweenEditorAndRenderedDocument(codeMirror, renderedDocumentContainer)
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

  codeMirror.refresh()
}


function syncScrollingBetweenEditorAndRenderedDocument(codeMirror, renderedDocumentContainer) {
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
  // Whenever the user scrolls through the    
  let sourceMappedElements = []

  // We'll wait until the user is done typing before we re-render the document with their
  // changes. We consider the user to be done typing once 1 second has elapsed since their
  // last keystroke.
  const MS_SINCE_LAST_KEYSTROKE = 1000

  codeMirror.on('change', debounce(codeMirror => {
    renderedDocumentContainer.innerHTML = Up.toHtml(codeMirror.getValue(), {
      createSourceMap: true
    })

    sourceMappedElements = renderedDocumentContainer.querySelectorAll('[data-up-source-line]')
  }, MS_SINCE_LAST_KEYSTROKE))

  // Because we're syncing our scrolling with line numbers in the editor, not pixels, 15 FPS
  // should be frequent enough.
  const FPS_FOR_SCROLL_SYNCING = 15
  const SCROLL_SYNC_INTERVAL = 1000 / FPS_FOR_SCROLL_SYNCING

  // First, let's sync scrolling from the rendered document to the editor...
  renderedDocumentContainer.addEventListener('scroll', throttle(() => {
    for (let i = 0; i < sourceMappedElements.length; i++) {
      const element = sourceMappedElements[i]

      // Is this the first outline element that's in view?
      if (element.getBoundingClientRect().top >= 0) {
        // Yes it is! Let's scroll to the appropriate line in the editor, then bail.
        //
        // Line numbers in Up start at 1.
        const lineIndex = element.dataset.upSourceLine - 1
        const editorLineY = codeMirror.charCoords({ line: lineIndex }, 'local').top

        codeMirror.scrollTo(null, editorLineY)
        return
      }
    }
  }), SCROLL_SYNC_INTERVAL)

  // And now, let's sync scrolling from the editor to the rendered document!
  codeMirror.getScrollerElement().addEventListener('scroll', throttle(() => {
    // Line numbers in the CodeMirror editor start at 0. 
    const firstVisibleLineNumber = 1 + codeMirror.lineAtHeight(0, 'window')
    console.log(firstVisibleLineNumber)

    for (let i = 0; i < sourceMappedElements.length; i++) {
      const element = sourceMappedElements[i]

      // Is this the first outline element that was produced by (or after) the first visible
      // line in the editor?
      if (element.dataset.upSourceLine >= firstVisibleLineNumber) {
        // Yes it is! Let's scroll to the appropriate line in the editor, then bail.
        element.scrollIntoView()
        return
      }
    }

  }, SCROLL_SYNC_INTERVAL))
}
