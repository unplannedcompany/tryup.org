import './style/app.scss'
import configureEditor from './configureEditor'
import configureScrollPositionAfterNavigation from './configureScrollPositionAfterNavigation'


const getElementById = document.getElementById.bind(document)

document.addEventListener('DOMContentLoaded', () => {
  const tabPanelContainer = getElementById('tab-panel-container')

  configureScrollPositionAfterNavigation(tabPanelContainer)
  
  configureEditor(
    getElementById('editor-container'),
    tabPanelContainer,
    getElementById('documentation-container'),
    getElementById('toc-container'))
})
