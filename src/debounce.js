export default function debounce(callback, delay) {
  let timeoutHandle

  return (...args) => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }

    const callbackWithArgs = () => {
      callback.apply(this, args)
    }

    timeoutHandle = setTimeout(callbackWithArgs, delay)
  }
}
