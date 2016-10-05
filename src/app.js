import 'normalize.css'
import './style/lib/codemirror.css'
import './style/layout.scss'
import './style/editor.scss'
import './style/document.scss'
import './style/syncingAnimation.scss'

import configureEditor from './configureEditor'

const getElementById = document.getElementById.bind(document)

document.addEventListener('DOMContentLoaded', () => {
  configureEditor(
    getElementById('editor-container'),
    getElementById('document-container'),
    getElementById('table-of-contents-container'))
})

window.addEventListener('pageshow', function() {
  // When the user navigates back to our page, the browser resets the scroll
  // position of our scrollable document panel.
  //
  // Assigning `window.location.href` to itself causes the browser to
  // re-scroll to the hash location in the URL. This isn't a perfect solution,
  // because it merely scrolls the panel back to the last internal link the user
  // followed.
  if (window.location.hash) {
    window.location.href = window.location.href
  }
});