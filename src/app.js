import 'normalize.css'

import './style/lib/codemirror.css'
import './style/app.scss'
import './style/codemirror-changes.scss'

import { Up } from 'write-up'
import CodeMirror from 'codemirror'



document.addEventListener('DOMContentLoaded', () => {
  const editorContainer = document.getElementById('editorContainer')
  const renderedContainer = document.getElementById('renderedContainer')

  const codeMirror = CodeMirror(editorContainer, {
    value: require('./editor.up'),
    lineNumbers: true,
    lineWrapping: true
  })

  configureSoftWrappedLinesToBeIndented(codeMirror)
})


// This is adapted from this demo: https://codemirror.net/demo/indentwrap.html
//
// It does not work when tabs are used for indentation, because CodeMirror handles
// tab characters using a special `<span class="cm-tab">` element. Luckily, our
// editor is conigured (by default) to use spaces for indentation.
//
// TODO: Replace leading tab characters on-paste
function configureSoftWrappedLinesToBeIndented(codeMirror) {
  const charWidth = codeMirror.defaultCharWidth()
  
  // This value is taken from the "PADDING" section of `codemirror.css`
  const basePadding = 4

  codeMirror.on('renderLine', (codeMirror, line, lineElement) => {
    const indentation = charWidth * CodeMirror.countColumn(
      line.text,
      null,
      codeMirror.getOption('tabSize'))

    // First, let's eliminate the natural indentation provided by the leading spaces themselves.
    lineElement.style.textIndent = `-${indentation}px`

    // Now, let's use padding to indent the entire soft-wrapped line!
    lineElement.style.paddingLeft = `${basePadding + indentation}px`
  })

  codeMirror.refresh()
}


function debounce(callback, delay) {
  let timeoutHandle

  return () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }

    timeoutHandle = setTimeout(callback, delay)
  }
}