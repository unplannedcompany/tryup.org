import './style/app.scss'
import getElementById from './getElementById'
import configureEditor from './configureEditor'
import configureTabControls from './configureTabControls'
import configureScrollPositionAfterNavigation from './configureScrollPositionAfterNavigation'


document.addEventListener('DOMContentLoaded', () => {
  const tabPanelContainer = getElementById('tab-panel-container')
  
  configureScrollPositionAfterNavigation(tabPanelContainer)

  configureEditor(
    getElementById('editor-container'),
    tabPanelContainer,
    getElementById('documentation-container'),
    getElementById('table-of-contents-container'))
  
  configureTabControls(
    getElementById('tab-container'),
    tabPanelContainer)
})
