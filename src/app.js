import 'normalize.css'
import './style/lib/codemirror.css'
import './style/layout.scss'
import './style/editor.scss'
import './style/document.scss'
import './style/syncingAnimation.scss'

import configureEditor from './configureEditor'
import sessionHelper from './sessionHelper'


const getElementById = document.getElementById.bind(document)

document.addEventListener('DOMContentLoaded', () => {
  configureEditor(
    getElementById('editor-container'),
    getElementById('document-container'),
    getElementById('table-of-contents-container'))
})

window.addEventListener('pageshow', function () {
  // When the user navigates back to our page from an external page, the browser
  // resets the scroll position of our scrollable document panel.
  //
  // Here, we restore the user's scroll position.
  //
  // NOTE: We don't save any changes the user made to the document, so this could
  // be a bit confusing if they added/removed a large potion of text from the
  // documentation. 
  getElementById('document-container').scrollTop =
    sessionHelper.getDocumentScrollTop()
})

