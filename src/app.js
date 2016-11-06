import './style/app.scss'
import getElementById from './getElementById'
import configureEditor from './configureEditor'
import configureTableOfContentsVisibility from './configureTableOfContentsVisibility'
import configureScrollPositionAfterNavigation from './configureScrollPositionAfterNavigation'


document.addEventListener('DOMContentLoaded', () => {
  const documentationContainer = getElementById('documentation-container')

  configureScrollPositionAfterNavigation(
    documentationContainer)

  configureEditor(
    getElementById('editor-container'),
    documentationContainer,
    getElementById('documentation'),
    getElementById('table-of-contents'))

  configureTableOfContentsVisibility(
    getElementById('show-documentation'),
    getElementById('show-table-of-contents'))
})
