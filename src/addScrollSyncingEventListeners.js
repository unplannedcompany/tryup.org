import debounce from './debounce'

export default function addScrollSyncingEventListeners(args) {
  const {
    editorContentContainer,
    tabPanelContainer,
    syncScrollingFromTabPanel,
    syncScrollingFromEditor } = args

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
  let ignoringScrollEventsFromTabPanel = false
  let ignoringScrollEventsFromEditor = false

  const getEventReEnabler = reEnable =>
    debounce(reEnable, 250)

  const eventuallyReEnableScrollEventsFromEditor = getEventReEnabler(() => {
    ignoringScrollEventsFromEditor = false
  })

  const eventuallyReEnableScrollEventsFromTabPanel = getEventReEnabler(() => {
    ignoringScrollEventsFromTabPanel = false
  })

  function temporarilyIgnoreScrollEventsFromEditor() {
    ignoringScrollEventsFromEditor = true
    eventuallyReEnableScrollEventsFromEditor()
  }

  function temporarilyIgnoreScrollEventsFromTabPanel() {
    ignoringScrollEventsFromTabPanel = true
    eventuallyReEnableScrollEventsFromTabPanel()
  }

  addScrollEventListener(tabPanelContainer, () => {
    if (!ignoringScrollEventsFromTabPanel) {
      syncScrollingFromTabPanel()
      temporarilyIgnoreScrollEventsFromEditor()
    }
  })

  addScrollEventListener(editorContentContainer, () => {
    if (!ignoringScrollEventsFromEditor) {
      syncScrollingFromEditor()
      temporarilyIgnoreScrollEventsFromTabPanel()
    }
  })
}


function addScrollEventListener(element, listener) {
  element.addEventListener('scroll', listener)
}