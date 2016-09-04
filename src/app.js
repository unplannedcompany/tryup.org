import 'normalize.css'
import './style/lib/codemirror.css'
import './style/app.scss'

import configureCodeMirror from './configureCodeMirror'


const $ = document.getElementById.bind(document)

document.addEventListener('DOMContentLoaded', () => {
  configureCodeMirror($('editor-container'), $('rendered-document-container'))  
})
