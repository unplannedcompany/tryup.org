import './style/app.scss'
import configureEditor from './configureEditor'
import configureScrollPositionAfterNavigation from './configureScrollPositionAfterNavigation'


const getElementById = document.getElementById.bind(document)

document.addEventListener('DOMContentLoaded', () => {
  const documentationContainer = getElementById('documentation-container')

  configureScrollPositionAfterNavigation(documentationContainer)
  
  configureEditor(
    getElementById('editor-container'),
    documentationContainer,
    getElementById('table-of-contents-container'))
})
