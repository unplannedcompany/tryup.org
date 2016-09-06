import 'normalize.css'
import './style/lib/codemirror.css'
import './style/app.scss'

import configureCodeMirror from './configureCodeMirror'


document.addEventListener('DOMContentLoaded', () => {
  configureCodeMirror(
    document.getElementById('editor-container'),
    document.getElementById('document-container'))
})
