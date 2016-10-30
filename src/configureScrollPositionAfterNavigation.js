import getElementById from './getElementById'
import onLinkClick from './onLinkClick'


export default function configureScrollPositionAfterNavigation(documentationContainerElement) {
  // Because we're using a scrolling panel, some browsers fail to restore the
  // documentation's scroll position when the user navigates backward or
  // forward.
  //
  // To work around this, we save the user's scroll position every time they
  // click a link, then use the `popstate` event to manually restore their
  // scroll position.  
  onLinkClick(documentationContainerElement, () => { saveDocumentationScrollPosition() })

  // If the user scrolls halfway down the documentation, then navigates backward
  // to some external page, then navigates forward to return to our page again,
  // we want to be able to restore their scroll position. 
  window.addEventListener('beforeunload', () => {
    saveDocumentationScrollPosition()
  })

  window.addEventListener('popstate', event => {
    const { state } = event
    recallDocumentationScrollPosition(state)
  })

  // In Chrome, the `popstate` event doesn't' fire when the user navigates
  // backward from an external page. 
  window.addEventListener('pageshow', () => {
    const { state } = window.history
    recallDocumentationScrollPosition(state)
  })

  function saveDocumentationScrollPosition() {
    const { scrollTop } = documentationContainerElement
    window.history.replaceState({ scrollTop }, '')
  }

  function recallDocumentationScrollPosition(historyState) {
    if (historyState) {
      documentationContainerElement.scrollTop = historyState.scrollTop
    } else {
      // If the user clicks an internal link, navigates backward, then tries
      // to navigate forward again, there won't be any special history state,
      // and thus we won't be able to tell the browser where to scroll.
      //
      // Luckily, we do have the URL hash of the location the user is trying
      // to navigate to!
      scrollUrlHashElementIntoView()
    }
  }
}


function scrollUrlHashElementIntoView() {
  const { hash } = window.location

  if (hash) {
    const elementId = hash.substring(1)
    const element = getElementById(elementId)

    if (element) {
      element.scrollIntoView()
    }
  }
}
