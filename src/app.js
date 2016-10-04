import 'normalize.css'
import './style/lib/codemirror.css'
import './style/layout.scss'
import './style/documentation.scss'
import './style/documentation.scss'
import './style/syncingAnimation.scss'

import configureEditor from './configureEditor'


const getElementById = document.getElementById.bind(document)

document.addEventListener('DOMContentLoaded', () => {
  configureEditor(
    getElementById('editor-container'),
    getElementById('document-container'),
    getElementById('table-of-contents-container'))
})
