// Returns a version of `callback` that won't execute more than
// once per `cooldown` period (in milliseconds).
export default function throttle(callback, cooldown) {
  let isInCooldown = false

  return (...args) => {
    if (!isInCooldown) {
      callback(...args)
      isInCooldown = true

      setTimeout(() => { isInCooldown = false }, cooldown)
    }
  }
}