import './style/app.scss'
import getElementById from './getElementById'
import configureEditor from './configureEditor'
import configureTableOfContentsVisibility from './configureTableOfContentsVisibility'
import configureScrollPositionAfterNavigation from './configureScrollPositionAfterNavigation'


document.addEventListener('DOMContentLoaded', () => {
  const documentationContainerElement = getElementById('documentation-container')
  
  configureScrollPositionAfterNavigation(
    documentationContainerElement)

  configureEditor(
    getElementById('editor-container'),
    documentationContainerElement,
    getElementById('documentation'),
    getElementById('table-of-contents'))
  
  configureTableOfContentsVisibility(
    getElementById('show-documentation'),
    getElementById('show-table-of-contents'))
})
