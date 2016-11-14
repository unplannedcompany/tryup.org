import './style/app.scss'
import getElementById from './getElementById'
import configureEditor from './configureEditor'
import configureTableOfContentsVisibility from './configureTableOfContentsVisibility'


document.addEventListener('DOMContentLoaded', () => {
  const documentationContainerElement = getElementById('documentation-container')

  configureEditor({
    editorContainerElement: getElementById('editor-container'),
    documentationContainerElement,
    documentationScrollerElement: document.body,
    documentationElement: getElementById('documentation'),
    tableOfContentsElement: getElementById('table-of-contents')
  })

  configureTableOfContentsVisibility(
    getElementById('show-documentation'),
    getElementById('show-table-of-contents'))

  // If an element has an explicit tab index, it's meant to be interactable with a keyboard.
  //
  // Here, we make these elements clickable using the enter key or space bar.
  documentationContainerElement.addEventListener('keydown', event => {
    const element = event.target
    const ENTER_KEY = 13
    const SPACE_KEY = 32

    if (element.hasAttribute('tabindex') && [ENTER_KEY, SPACE_KEY].indexOf(event.keyCode) !== -1) {
      event.preventDefault()
      element.click()
    }
  })
})
