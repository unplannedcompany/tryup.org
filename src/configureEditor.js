import CodeMirror from 'codemirror'
import * as Up from 'write-up'
import debounce from './debounce'
import addScrollSyncingEventListeners from './addScrollSyncingEventListeners'
import upSettings from './upSettings'


// WARNING: This collection represents shared state!
//
// This collection contains every element with a source line number in the visible tab.
// Every time we re-render changes from the editor, we'll update this collection.
//
// Whenever the user scrolls through the tab panel container, we use this collection to
// scroll the CodeMirror editor to the line corresponding to the first visible element
// from this collection.
//
// Likewise, whenever the user scrolls through the editor, we use this collection to
// scroll to the first element in the tab panel produced by (or after) the first visible
// line in the editor.
//
// TODO: Handle toggling visibility of table of contents
let sourceMappedElements = []

function refreshSourceMappedElements(tabPanelContainer) {
  sourceMappedElements =
    tabPanelContainer.querySelectorAll('[data-up-source-line]')
}


export default function configureEditor(
  // Contains the CodeMirror editor
  editorContainer,
  // Contains the rendered documentation or table of contents, depending on which is visible
  tabPanelContainer,
  // Contains the rendered documentation
  documentationContainer,
  // Contains the rendered table of contents
  tableOfContentsContainer
) {
  const codeMirror = CodeMirror(editorContainer, {
    value: require('./content/documentation.up'),
    lineNumbers: true,
    lineWrapping: true,
    tabSize: 2,
    extraKeys: {
      Tab: () => {
        // By default, if there is any selected text, pressing Tab indents the selection using
        // any applicable indentation settings. That's exactly what we want, so we'll use that
        // behavior.
        if (codeMirror.somethingSelected()) {
          return CodeMirror.Pass
        }

        // However, if no text is selected, CodeMirror inserts a tab character regardless of
        // any applicable indentation settings. Here, we insert spaces instead.
        const spacesPerTab = codeMirror.getOption('indentUnit')
        const indentation = repeat(' ', spacesPerTab)
        codeMirror.replaceSelection(indentation)
      }
    }
  })

  // When the user presses Shift-Tab, the editor should reduce the indentation level,
  // not remove all indentation (which is the default behavior). 
  CodeMirror.keyMap.default['Shift-Tab'] = 'indentLess'

  configureCodeMirrorToIndentSoftWrapedLines(codeMirror)
  configureLivePreview(codeMirror, tabPanelContainer, documentationContainer, tableOfContentsContainer)

  addScrollSyncingEventListeners(
    codeMirror,
    tabPanelContainer,
    syncScrollingFromTabPanel,
    syncScrollingFromEditor
  )

  // Whenever the visibility of the table of contents is toggled, we need to re-sync the
  // scroll positions of the editor and the tab panel container.
  //
  // The tab panel container contains both the table of contents and the documentation
  // itself, and the scroll position for one is not valid for the other.
  new MutationObserver(() => {
    syncScrollingFromEditor(codeMirror, tabPanelContainer)
  }).observe(tableOfContentsContainer, { attributes: true })

  codeMirror.refresh()
  refreshSourceMappedElements(tabPanelContainer)
}


function configureLivePreview(codeMirror, tabPanelContainer, documentationContainer, tableOfContentsContainer) {
  // We'll wait until the user is done typing before we re-render their changes. We consider the
  // user to be done typing once 1.2 seconds has elapsed since their last keystroke.
  //
  // In the meantime, we'll fade any rendered content (using the `dirty` CSS class) to indicate
  // that it's out of date.
  let isDirty = false

  const debounceRender = debounce(() => {
    if (!isDirty) {
      return
    }

    render(codeMirror, tabPanelContainer, documentationContainer, tableOfContentsContainer)
    markRenderedContentAsClean()
  }, 1200)

  codeMirror.on('change', () => {
    markRenderedContentAsDirty()
    debounceRender()
  })

  for (let event of ['keydown', 'cursorActivity']) {
    codeMirror.on(event, debounceRender)
  }

  function markRenderedContentAsDirty() {
    isDirty = true
    tabPanelContainer.classList.remove('clean')
    tabPanelContainer.classList.add('dirty')
  }

  function markRenderedContentAsClean() {
    isDirty = false
    tabPanelContainer.classList.remove('dirty')
    tabPanelContainer.classList.add('clean')
  }
}


function render(codeMirror, tabPanelContainer, documentationContainer, tableOfContentsContainer) {
  const markup = codeMirror.getValue()
  const { documentHtml, tableOfContentsHtml } =
    Up.parseAndRenderDocumentAndTableOfContents(markup, upSettings)

  // In Safari, if the documentation contains any audio or video players, and if the user
  // edits markup while the viewport is past the first media player, the viewport automatically
  // jumps back to the first media player when its HTML is re-rendered.
  //
  // To avoid this, we manually restore its `scrollTop` to its pre-render position.
  const { scrollTop } = tabPanelContainer

  documentationContainer.innerHTML = documentHtml
  tableOfContentsContainer.innerHTML = tableOfContentsHtml

  tabPanelContainer.scrollTop = scrollTop
  refreshSourceMappedElements(tabPanelContainer)
}


function syncScrollingFromTabPanel(codeMirror, tabPanelContainer) {
  for (let i = 0; i < sourceMappedElements.length; i++) {
    const element = sourceMappedElements[i]

    if (isTotallyHidden(element)) {
      // Below, we use `getBoundingClientRect().top` to determine whether the element is
      // within the viewport. Unfortunately,  if the element is hidden (as opposed to
      // merely off-screen), we always get an unhelpful value of `0`, which implies the
      // element is at the top of the viewport.
      continue
    }

    // Why do we subtract 10 pixels?
    //
    // Well, it's a bit arbitrary! The general idea is that we don't care whether
    // every single pixel of an element is within the viewport (particularly not its
    // margin and padding). If all but the top 10 pixels are within the viewport, we'll
    // consider it within view.  
    //
    // A better solution would be to check the margin and padding of each element, but
    // this is good enough. 
    const viewportTop = tabPanelContainer.offsetTop - 10

    // We cheat here. We know the previous element in the list is *not* within the
    // viewport; if it were, we wouldn't still be in this loop!
    const isMostlyWithinViewport =
      element.getBoundingClientRect().top >= viewportTop

    // Is this the first documentation element starting within the viewport?
    if (isMostlyWithinViewport) {
      // Line numbers in Up start at 1, not 0.
      const editorLineIndex = element.dataset.upSourceLine - 1

      const editorCharToScrollTo = {
        line: editorLineIndex,
        ch: 0
      }

      const topOfEditorLine =
        codeMirror.charCoords(editorCharToScrollTo, 'local').top

      codeMirror.scrollTo(null, topOfEditorLine)
      return
    }
  }
}


function syncScrollingFromEditor(codeMirror, tabPanelContainer) {
  // Line numbers in the CodeMirror editor start at 0. 
  const firstVisibleLineNumber = 1 + codeMirror.lineAtHeight(0, 'window')

  if (firstVisibleLineNumber === 1) {
    // When browsers scroll an element into view, the element's top margin is not
    // scrolled into view along with the element.
    //
    // Normally, this is exactly what we want!
    //
    // However, the user probably expects that scrolling the editor to its top will
    // automatically scroll the documentation to *its* top, too. Here, we make sure
    // that happens.
    tabPanelContainer.scrollTop = 0
    return
  }

  for (let i = 0; i < sourceMappedElements.length; i++) {
    const element = sourceMappedElements[i]

    if (isTotallyHidden(element)) {
      continue
    }

    // Is this the first outline element that was produced by (or after) the first
    // visible line in the editor?
    if (element.dataset.upSourceLine >= firstVisibleLineNumber) {
      element.scrollIntoView();
      return
    }
  }
}


function isTotallyHidden(element) {
  // If an element's `display` is set to `none`, its `offsetParent` returns `null`.
  //
  // See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
  //
  // We don't check `style.display` directly, because it returns an empty string if
  // it wasn't set by JavaScript.   
  return !element.offsetParent;
}


// Returns a new string consisting of `count` copies of `text`
function repeat(text, count) {
  return new Array(count + 1).join(text)
}


// This is adapted from this demo: https://codemirror.net/demo/indentwrap.html
//
// It does not work when tabs are used for indentation, because CodeMirror handles
// tab characters using a special `<span class="cm-tab">` element. Luckily, our
// editor is conigured (by default) to use spaces for indentation.
//
// TODO: Replace leading tab characters on-paste
function configureCodeMirrorToIndentSoftWrapedLines(codeMirror) {
  const charWidth = codeMirror.defaultCharWidth()

  // This value is taken from the "PADDING" section of `codemirror.css`
  const BASE_PADDING = 4

  codeMirror.on('renderLine', (codeMirror, line, lineElement) => {
    const indentationWidth = charWidth * CodeMirror.countColumn(line.text)

    // First, let's eliminate the natural indentation provided by the leading spaces themselves.
    lineElement.style.textIndent = `-${indentationWidth}px`

    // Now, let's use padding to indent the entire soft-wrapped line!
    lineElement.style.paddingLeft = `${BASE_PADDING + indentationWidth}px`
  })
}
