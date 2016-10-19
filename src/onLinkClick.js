export default function onLinkClick(container, callback) {
  container.addEventListener('click', event => {
    let clickedElement = event.target

    do {
      if (clickedElement.tagName === 'A') {
        callback(event)
        return
      }
    } while (clickedElement = clickedElement.parentNode)
  })
}
