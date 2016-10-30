// Returns `true` if an element is hidden (directly or indirectly) via
// `display: none`.
export default function isTotallyHidden(element) {
  // If an element's `display` is set to `none`, its `offsetParent` returns `null`.
  //
  // See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
  //
  // We don't check `style.display` directly, because it returns an empty string if
  // it wasn't set by JavaScript.   
  return !element.offsetParent;
}
