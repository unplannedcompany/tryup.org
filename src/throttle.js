// Returns a version of `callback` that won't execute more than
// once per `cooldown` period (in milliseconds).
//
// If the returned function is invoked during the cooldown period,
// it will execute as soon as the cooldown period ends.
export default function throttle(callback, cooldown) {
  let isInCooldown = false, wasInvokedDuringCooldown = false

  return (...args) => {
    if (isInCooldown) {
      wasInvokedDuringCooldown = true
    } else {
      isInCooldown = true
      executeAndScheduleEndOfCooldown()
    }

    function executeAndScheduleEndOfCooldown() {
      callback(...args)
      setTimeout(onEndOfCooldown, cooldown)
    }

    function onEndOfCooldown() {
      if (wasInvokedDuringCooldown) {
        executeAndScheduleEndOfCooldown()
        wasInvokedDuringCooldown = false
      } else {
        isInCooldown = false
      }
    }
  }
}
