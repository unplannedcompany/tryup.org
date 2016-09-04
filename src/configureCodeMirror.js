import debounce from './debounce'
import CodeMirror from 'codemirror'
import { Up } from 'write-up'


export default function configureCodeMirror(editorContainer, renderedDocumentContainer) {
  const codeMirror = CodeMirror(editorContainer, {
    value: require('./editor.up'),
    lineNumbers: true,
    lineWrapping: true
  })

  configureSoftWrappedLinesToBeIndented(codeMirror)

  codeMirror.on('change', debounce(codeMirror => {
    renderedDocumentContainer.innerHTML =
      Up.toHtml(codeMirror.getValue(), {
        createSourceMap: true
      })
  }, 1000))
}


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