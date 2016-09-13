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