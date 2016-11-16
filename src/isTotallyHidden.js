// Returns `true` if an element is hidden (directly or indirectly) via
// `display: none`.
//
// NOTE: This function does not work for elements whose `position` is `fixed`; it
// will always return `true`.
export default function isTotallyHidden(element) {
  // If an element's `display` (or the `display` of an ancestor) is set to `none`,
  // its `offsetParent` returns `null`.
  //
  // See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
  //
  // We don't check `style.display` directly, because it returns an empty string if
  // it wasn't set by JavaScript.
  return !element.offsetParent;
}
