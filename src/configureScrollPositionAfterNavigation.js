export default function configureScrollPositionAfterNavigation(documentationContainer) {
  // Because we're using a scrolling panel, the browser fails to restore the
  // documentation's scroll position when the user navigates backward (or
  // forward).
  //
  // To work around this, we save the user's scroll position every time they
  // click a link, then use the `popstate` event to manually restore their
  // scroll position.  
  function saveDocumentScrollPosition() {
    const { scrollTop } = documentationContainer
    window.history.replaceState({ scrollTop }, '')
  }

  function recallDocumentScrollPosition(historyState) {
    if (historyState) {
      documentationContainer.scrollTop = historyState.scrollTop
    }
  }

  // If the user scrolls halfway down the documentation, then navigates backward
  // to some external page, then navigates forward to return to our page again,
  // we want to be able to restore their scroll position. 
  window.addEventListener('beforeunload', () => {
    saveDocumentScrollPosition()
  })

  documentationContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      saveDocumentScrollPosition()
    }
  })

  window.addEventListener('popstate', (event) => {
    const { state } = event
    recallDocumentScrollPosition(state)
  })

  // In Chrome, the `popstate` event does not fire when the user navigates
  // backward from an external page. 
  window.addEventListener('pageshow', () => {
    const { state } = window.history
    recallDocumentScrollPosition(state)
  })
}
