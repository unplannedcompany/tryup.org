import CodeMirror from 'codemirror'
import * as Up from 'write-up'
import debounce from './debounce'
import throttle from './throttle'


// WARNING: This collection represents shared state!
//
// This is a collection  of every element from the rendered document that has a source
// line number. Every time we re-render the document, we'll update this collection.
//
// Whenever the user scrolls through the rendered document, we use this collection to
// scroll the CodeMirror editor to the line corresponding to the first element from this
// collection that is within the user's viewport.
//
// Likewise, whenever the user scrolls through the editor, we use this collection to
// scroll to the first element in the document produced by (or after) the first visible
// line in the editor.
let sourceMappedElements = []

function refreshSourceMappedElements(documentContainer) {
  sourceMappedElements = documentContainer.querySelectorAll('[data-up-source-line]')
}


export default function configureEditor(editorContainer, documentContainer, tableOfContentsContainer) {
  const codeMirror = CodeMirror(editorContainer, {
    value: require('./content/document.up'),
    lineNumbers: true,
    lineWrapping: true,
    tabSize: 2,
    extraKeys: {
      Tab: () => {
        // By default, if there is any selected text, pressing Tab indents the selection using
        // any applicable indentation settings. That's exactly what we want, so we'll use that
        // behavior.
        if (codeMirror.somethingSelected()) {
          return CodeMirror.Pass
        }

        // However, if no text is selected, CodeMirror inserts a tab character regardless of
        // any applicable indentation settings. Here, we insert spaces instead.
        const spacesPerTab = codeMirror.getOption('indentUnit')
        const indentation = repeat(' ', spacesPerTab)
        codeMirror.replaceSelection(indentation)
      }
    }
  })

  // When the user presses Shift-Tab, the editor should reduce the indentation level,
  // not remove all indentation (which is the default behavior). 
  CodeMirror.keyMap.default['Shift-Tab'] = 'indentLess'

  configureCodeMirrorToIndentSoftWrapedLines(codeMirror)
  configureLivePreview(codeMirror, documentContainer, tableOfContentsContainer)
  syncScrolling(codeMirror, documentContainer)

  codeMirror.refresh()
  refreshSourceMappedElements(documentContainer)
}

// Returns a new string consisting of `count` copies of `text`
function repeat(text, count) {
  return new Array(count + 1).join(text)
}


function configureLivePreview(codeMirror, documentContainer, tableOfContentsContainer) {
  // We'll wait until the user is done typing before we re-render the document with their
  // changes. We consider the user to be done typing once 1.2 seconds has elapsed since
  // their last keystroke.
  //
  // In the meantime, we'll fade the document (using the `dirty` CSS class) to indicate it's
  // out of date.
  const debouncedRender = debounce(codeMirror => {
    const markup = codeMirror.getValue()
    const { documentHtml, tableOfContentsHtml } =
      Up.parseAndRenderDocumentAndTableOfContents(
        markup, {
          parsing: { createSourceMap: true }
        })

    documentContainer.innerHTML = documentHtml
    tableOfContentsContainer.innerHTML = tableOfContentsHtml

    refreshSourceMappedElements(documentContainer)
    markDocumentAsClean()
  }, 1200)

  codeMirror.on('change', codeMirror => {
    markDocumentAsDirty()
    debouncedRender(codeMirror)
  })

  function markDocumentAsDirty() {
    documentContainer.classList.remove('clean')
    documentContainer.classList.add('dirty')
  }

  function markDocumentAsClean() {
    documentContainer.classList.remove('dirty')
    documentContainer.classList.add('clean')
  }
}


function syncScrolling(codeMirror, documentContainer) {
  const FPS_FOR_SCROLL_SYNCING = 60
  const SCROLL_SYNC_INTERVAL = 1000 / FPS_FOR_SCROLL_SYNCING

  const getScrollSyncer = sync =>
    throttle(sync, SCROLL_SYNC_INTERVAL)

  addScrollSyncingEventListeners({
    editorContentContainer: codeMirror.getScrollerElement(),
    documentContainer,

    syncScrollingFromDocument: getScrollSyncer(() => {
      for (let i = 0; i < sourceMappedElements.length; i++) {
        const element = sourceMappedElements[i]

        if (!element.offsetParent) {
          // Below, we use `getBoundingClientRect().top` to determine whether the element is
          // within the viewport. Unfortunately,  if the element is hidden (as opposed to
          // merely off-screen), we always get an unhelpful value of `0`, which implies the
          // element is at the top of the viewport.
          //
          // To work around this, we check `offsetParent`, which is `null` if the element is
          // hidden.
          continue
        }

        // Why -1 and not 0?
        //
        // When you click a link pointing to fragment URL (e.g. a section link), the browser
        // scrolls the appropriate element into view. Oddly, in some browsers, the top of that
        // element is a fraction of a pixel above the top of the viewport. 
        const VIEWPORT_TOP = -1

        // Is this the first document element starting within the viewport?
        if (element.getBoundingClientRect().top >= VIEWPORT_TOP) {
          // Line numbers in Up start at 1, not 0.
          const editorLineIndex = element.dataset.upSourceLine - 1

          const editorCharToScrollTo = {
            line: editorLineIndex,
            ch: 0
          }

          const topOfEditorLine =
            codeMirror.charCoords(editorCharToScrollTo, 'local').top

          codeMirror.scrollTo(null, topOfEditorLine)
          return
        }
      }
    }),

    syncScrollingFromEditor: getScrollSyncer(() => {
      // Line numbers in the CodeMirror editor start at 0. 
      const firstVisibleLineNumber = 1 + codeMirror.lineAtHeight(0, 'window')

      if (firstVisibleLineNumber === 1) {
        // When browsers scroll an element into view, the element's top margin is ignored.
        // It is not scrolled into view along with element.
        //
        // Normally, this is exactly what we want.
        //
        // However, if the first element in the document has a top margin, its odd that
        // scrolling the editor to its top fails to scroll the document to its top.
        //
        // To fix this, if the editor is scrolled to its top, we automatically scroll the
        // document to its top, too.
        documentContainer.scrollTop = 0
        return
      }

      for (let i = 0; i < sourceMappedElements.length; i++) {
        const element = sourceMappedElements[i]

        // Is this the first outline element that was produced by (or after) the first
        // visible line in the editor?
        if (element.dataset.upSourceLine >= firstVisibleLineNumber) {
          element.scrollIntoView();
          return
        }
      }
    })
  })
}


function addScrollSyncingEventListeners(args) {
  const {
    editorContentContainer,
    documentContainer,
    syncScrollingFromDocument,
    syncScrollingFromEditor } = args

  // We need to watch out for feedback loops!
  //
  // Let's say the user scrolls to line 100 in the editor. Normally, we'd scroll into view
  // the rendered element produced by that line. However, let's also pretend that line 100
  // didn't produce any syntax nodes. We'll say it's a blank line between paragraphs.
  //
  // So we do the next best thing: we scroll into view the first element produced *after*
  // line 100: a paragraph produced by line 101. This unfortunately triggers the rendered
  // document's scroll event, which in turn determines that the editor should be scrolled
  // to line 101: the line that produced the paragraph. Uh-oh!
  //
  // To prevent this, whenever the user scrolls a container, we ignore any scroll events
  // from the other container.
  let ignoringScrollEventsFromDocument = false
  let ignoringScrollEventsFromEditor = false

  const getEventReEnabler = reEnable =>
    debounce(reEnable, 250)

  const eventuallyReEnableScrollEventsFromEditor = getEventReEnabler(() => {
    ignoringScrollEventsFromEditor = false
  })

  const eventuallyReEnableScrollEventsFromDocument = getEventReEnabler(() => {
    ignoringScrollEventsFromDocument = false
  })

  function temporarilyIgnoreScrollEventsFromEditor() {
    ignoringScrollEventsFromEditor = true
    eventuallyReEnableScrollEventsFromEditor()
  }

  function temporarilyIgnoreScrollEventsFromDocument() {
    ignoringScrollEventsFromDocument = true
    eventuallyReEnableScrollEventsFromDocument()
  }

  addScrollEventListener(documentContainer, () => {
    if (!ignoringScrollEventsFromDocument) {
      syncScrollingFromDocument()
      temporarilyIgnoreScrollEventsFromEditor()
    }
  })

  addScrollEventListener(editorContentContainer, () => {
    if (!ignoringScrollEventsFromEditor) {
      syncScrollingFromEditor()
      temporarilyIgnoreScrollEventsFromDocument()
    }
  })
}


function addScrollEventListener(element, listener) {
  element.addEventListener('scroll', listener)
}


// This is adapted from this demo: https://codemirror.net/demo/indentwrap.html
//
// It does not work when tabs are used for indentation, because CodeMirror handles
// tab characters using a special `<span class="cm-tab">` element. Luckily, our
// editor is conigured (by default) to use spaces for indentation.
//
// TODO: Replace leading tab characters on-paste
function configureCodeMirrorToIndentSoftWrapedLines(codeMirror) {
  const charWidth = codeMirror.defaultCharWidth()

  // This value is taken from the "PADDING" section of `codemirror.css`
  const BASE_PADDING = 4

  codeMirror.on('renderLine', (codeMirror, line, lineElement) => {
    const indentationWidth = charWidth * CodeMirror.countColumn(line.text)

    // First, let's eliminate the natural indentation provided by the leading spaces themselves.
    lineElement.style.textIndent = `-${indentationWidth}px`

    // Now, let's use padding to indent the entire soft-wrapped line!
    lineElement.style.paddingLeft = `${BASE_PADDING + indentationWidth}px`
  })
}
