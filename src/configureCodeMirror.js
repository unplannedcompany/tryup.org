import CodeMirror from 'codemirror'
import { Up } from 'write-up'
import configureCodeMirrorToIndentSoftWrapedLines from './configureCodeMirrorToIndentSoftWrapedLines'
import debounce from './debounce'
import throttle from './throttle'


export default function configureCodeMirror(editorContainer, documentContainer, tableOfContentsContainer) {
  const codeMirror = CodeMirror(editorContainer, {
    value: require('./editor.up'),
    lineNumbers: true,
    lineWrapping: true
  })

  configureCodeMirrorToIndentSoftWrapedLines(codeMirror)
  configureLivePreview(codeMirror, documentContainer, tableOfContentsContainer)
  syncScrolling(codeMirror, documentContainer)

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

function addScrollEventListener(element, listener) {
  element.addEventListener('scroll', listener)
}

function syncScrolling(codeMirror, documentContainer) {
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
  // from that container for a short period.

  const PERIOD_TO_IGNORE_RECIPROCAL_SCROLL_EVENTS =
    SCROLL_SYNC_INTERVAL * 2

  function getEventReEnabler(callback) {
    return debounce(callback, PERIOD_TO_IGNORE_RECIPROCAL_SCROLL_EVENTS)
  }

  let ignoringScrollEventsFromEditor = false
  let ignoringScrollEventsFromDocument = false

  const eventuallyReEnableScrollEventsFromEditor = getEventReEnabler(() => {
    ignoringScrollEventsFromEditor = false
  })

  const eventuallyReEnableScrollEventsFromDocument = getEventReEnabler(() => {
    ignoringScrollEventsFromDocument = false
  })

  function getScrollSyncer(callback) {
    return throttle(callback, SCROLL_SYNC_INTERVAL)
  }

  const syncScrollingFromDocument = getScrollSyncer(() => {
    for (let i = 0; i < sourceMappedElements.length; i++) {
      const element = sourceMappedElements[i]

      // Why -1 and not 0?
      //
      // When you click a link pointing to fragment URL (e.g. a table of contents entry),
      // the browser scrolls the appropriate element into view. Oddly, in some browsers,
      // the top of that element is a fraction of a pixel above the top of the viewport. 
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
  })

  const syncScrollingFromEditor = getScrollSyncer(() => {
    // Line numbers in the CodeMirror editor start at 0. 
    const firstVisibleLineNumber = 1 + codeMirror.lineAtHeight(0, 'window')

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

  addScrollEventListener(documentContainer, () => {
    if (!ignoringScrollEventsFromDocument) {
      syncScrollingFromDocument()
      ignoringScrollEventsFromEditor = true
      eventuallyReEnableScrollEventsFromEditor()
    }
  })

  addScrollEventListener(codeMirror.getScrollerElement(), () => {
    if (!ignoringScrollEventsFromEditor) {
      syncScrollingFromEditor()
      ignoringScrollEventsFromDocument = true
      eventuallyReEnableScrollEventsFromDocument()
    }
  })
}
