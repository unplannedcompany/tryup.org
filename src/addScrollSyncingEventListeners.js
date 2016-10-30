import debounce from './debounce'
import throttle from './throttle'


export default function addScrollSyncingEventListeners(
  codeMirror,
  documentationScrollerElement,
  syncScrollingFromDocumentation,
  syncScrollingFromEditor
) {
  // We need to watch out for feedback loops!
  //
  // Let's say the user scrolls to line 100 in the editor. Normally, we'd scroll into view
  // the rendered element produced by that line. However, let's also pretend that line 100
  // didn't produce any syntax nodes. We'll say it's a blank line between paragraphs.
  //
  // So we do the next best thing: we scroll into view the first element produced *after*
  // line 100: a paragraph produced by line 101. This unfortunately triggers the tab panel's
  // scroll event, which in turn determines that the editor should be scrolled to line 101,
  // which is the line that produced the paragraph. Uh-oh!
  //
  // To prevent this, whenever the user scrolls a container, we ignore any scroll events
  // from the other container.
  let ignoringScrollEventsFromDocumentation = false
  let ignoringScrollEventsFromEditor = false

  const getEventReEnabler = reEnable =>
    debounce(reEnable, 250)

  const eventuallyReEnableScrollEventsFromEditor = getEventReEnabler(() => {
    ignoringScrollEventsFromEditor = false
  })

  const eventuallyReEnableScrollEventsFromDocumentation = getEventReEnabler(() => {
    ignoringScrollEventsFromDocumentation = false
  })

  function temporarilyIgnoreScrollEventsFromEditor() {
    ignoringScrollEventsFromEditor = true
    eventuallyReEnableScrollEventsFromEditor()
  }

  function temporarilyIgnoreScrollEventsFromDocumentation() {
    ignoringScrollEventsFromDocumentation = true
    eventuallyReEnableScrollEventsFromDocumentation()
  }

  const throttledSyncingFromDocumentation =
    throttleScrollSyncing(syncScrollingFromDocumentation, codeMirror, documentationScrollerElement)

  const throttledSyncingFromEditor =
    throttleScrollSyncing(syncScrollingFromEditor, codeMirror, documentationScrollerElement)

  addScrollEventListener(documentationScrollerElement, () => {
    if (!ignoringScrollEventsFromDocumentation) {
      throttledSyncingFromDocumentation()
      temporarilyIgnoreScrollEventsFromEditor()
    }
  })

  addScrollEventListener(codeMirror.getScrollerElement(), () => {
    if (!ignoringScrollEventsFromEditor) {
      throttledSyncingFromEditor()
      temporarilyIgnoreScrollEventsFromDocumentation()
    }
  })
}


function throttleScrollSyncing(syncScrolling, codeMirror, documentationContainerElement) {
  const FPS_FOR_SCROLL_SYNCING = 60
  const SCROLL_SYNC_INTERVAL = 1000 / FPS_FOR_SCROLL_SYNCING

  return throttle(
    () => syncScrolling(codeMirror, documentationContainerElement),
    SCROLL_SYNC_INTERVAL)
}


function addScrollEventListener(element, listener) {
  element.addEventListener('scroll', listener)
}
