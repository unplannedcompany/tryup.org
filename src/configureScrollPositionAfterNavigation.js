import onLinkClick from './onLinkClick'


export default function configureScrollPositionAfterNavigation(tabPanelContainer) {
  // Because we're using a scrolling panel, the browser fails to restore the
  // documentation's scroll position when the user navigates backward (or
  // forward).
  //
  // To work around this, we save the user's scroll position every time they
  // click a link, then use the `popstate` event to manually restore their
  // scroll position.  
  onLinkClick(tabPanelContainer, () => { saveTabPanelScrollPosition() })

  // If the user scrolls halfway down the documentation, then navigates backward
  // to some external page, then navigates forward to return to our page again,
  // we want to be able to restore their scroll position. 
  window.addEventListener('beforeunload', () => {
    saveTabPanelScrollPosition()
  })

  window.addEventListener('popstate', event => {
    const { state } = event
    recallTabPanelScrollPosition(state)
  })

  // In Chrome, the `popstate` event does not fire when the user navigates
  // backward from an external page. 
  window.addEventListener('pageshow', () => {
    const { state } = window.history
    recallTabPanelScrollPosition(state)
  })

  function saveTabPanelScrollPosition() {
    const { scrollTop } = tabPanelContainer
    console.log('saving: ' + scrollTop)
    window.history.replaceState({ scrollTop }, '')
  }

  function recallTabPanelScrollPosition(historyState) {
    if (historyState) {
      tabPanelContainer.scrollTop = historyState.scrollTop
    }
  }
}
