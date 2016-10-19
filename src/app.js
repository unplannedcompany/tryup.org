import './style/app.scss'
import getElementById from './getElementById'
import configureEditor from './configureEditor'
import configureTableOfContentsVisibility from './configureTableOfContentsVisibility'
import configureScrollPositionAfterNavigation from './configureScrollPositionAfterNavigation'


document.addEventListener('DOMContentLoaded', () => {
  const tabPanelContainer = getElementById('tab-panel-container')
  
  configureScrollPositionAfterNavigation(tabPanelContainer)

  configureEditor(
    getElementById('editor-container'),
    tabPanelContainer,
    getElementById('documentation-container'),
    getElementById('table-of-contents-container'))
  
  configureTableOfContentsVisibility(
    getElementById('show-documentation'),
    getElementById('show-table-of-contents'))
})
