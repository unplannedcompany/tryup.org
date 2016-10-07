// Returns a version of `callback` that won't execute until `delay`
// milliseconds after it was most recently invoked.
export default function debounce(callback, delay) {
  let timeoutHandle

  return (...args) => {
    clearTimeout(timeoutHandle)

    timeoutHandle =
      setTimeout(() => callback(...args), delay)
  }
}
 