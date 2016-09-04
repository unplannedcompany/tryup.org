import CodeMirror from 'codemirror'
import { Up } from 'write-up'
import debounce from './debounce'
import throttle from './throttle'


export default function configureCodeMirror(editorContainer, renderedDocumentContainer) {
  const codeMirror = CodeMirror(editorContainer, {
    value: require('./editor.up'),
    lineNumbers: true,
    lineWrapping: true
  })

  configureSoftWrappedLinesToBeIndented(codeMirror)

  // Here's where things get a bit messy.
  //
  // This collection represents any element from the rendered document that has a source
  // line number. In practice, this is a collection of every HTML element produced by an
  // outline syntax node ("outline" essentially means "block-level").
  //
  // Every time we re-render the document, we'll update this collection.
  //
  // Then, whenever the user scrolls through the rendered document, we use this collection
  // to scroll the CodeMirror editor to the line corresponding to the first element from
  // this collection that is within the user's viewport.   
  let sourceMappedElements = []

  // We'll wait until the user is done typing before we re-render the document with their
  // changes. We consider the user to be done typing once 1 second has elapsed since their
  // last keystroke.
  const MS_SINCE_LAST_KEYSTROKE = 1000

  codeMirror.on('change', debounce(codeMirror => {
    renderedDocumentContainer.innerHTML = Up.toHtml(codeMirror.getValue(), {
      createSourceMap: true
    })

    sourceMappedElements = renderedDocumentContainer.querySelectorAll('[data-up-source-line]')
  }, MS_SINCE_LAST_KEYSTROKE))

  // Because we're syncing our scrolling with line numbers in the editor, not pixels, 15 FPS
  // should be frequent enough.
  const FPS_FOR_SCROLL_SYNCING = 15

  renderedDocumentContainer.addEventListener('scroll', throttle(() => {
    for (let i = 0; i < sourceMappedElements.length; i++) {
      const element = sourceMappedElements[i]

      // Is this the first outline element that's in view?
      if (element.getBoundingClientRect().top >= 0) {
        // Yes it is! Let's scroll to the appropriate line in the editor, then bail.
        const lineOrdinal = element.dataset.upSourceLine - 1
        const editorLineY = codeMirror.charCoords({ line: lineOrdinal }, 'local').top

        codeMirror.scrollTo(null, editorLineY)
        return
      }
    }
  }), 1000 / FPS_FOR_SCROLL_SYNCING)
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
  const BASE_PADDING = 4

  codeMirror.on('renderLine', (codeMirror, line, lineElement) => {
    const indentation = charWidth * CodeMirror.countColumn(line.text)

    // First, let's eliminate the natural indentation provided by the leading spaces themselves.
    lineElement.style.textIndent = `-${indentation}px`

    // Now, let's use padding to indent the entire soft-wrapped line!
    lineElement.style.paddingLeft = `${BASE_PADDING + indentation}px`
  })

  codeMirror.refresh()
}
