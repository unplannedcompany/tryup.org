export default function throttle(callback, cooldown) {
  let isInCooldown = false

  return (...args) => {
    const callbackWithArgs = () => {
      callback.apply(this, args)
    }

    if (!isInCooldown) {
      callbackWithArgs()
      isInCooldown = true

      setTimeout(() => {
        isInCooldown = false
      }, cooldown)
    }
  }
}
