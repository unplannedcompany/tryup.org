export default function debounce(callback, delay) {
  let timeoutHandle

  return (...args) => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }

    timeoutHandle =
      setTimeout(() => { callback(...args) }, delay)
  }
}
