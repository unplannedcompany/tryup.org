const DOCUMENT_SCROLL_TOP_KEY = 'documentScrollTop'

const sessionHelper = {
  saveDocumentScrollTop: (scrollTop) => {
    window.sessionStorage.setItem(DOCUMENT_SCROLL_TOP_KEY, scrollTop)
  },

  getDocumentScrollTop: () =>
    window.sessionStorage.getItem(DOCUMENT_SCROLL_TOP_KEY)
}

export default sessionHelper