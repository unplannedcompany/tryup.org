import 'normalize.css'
import './style/lib/codemirror.css'
import './style/app.scss'

import configureEditor from './configureEditor'


document.addEventListener('DOMContentLoaded', () => {
  configureEditor(
    document.getElementById('editor-container'),
    document.getElementById('document-container'),
    document.getElementById('table-of-contents-container'))
})
