// Returns `true` on an iPhone, iPad, or iPaod.
export default function isOnIosDevice() {
  return ['iPhone', 'iPad', 'iPod'].indexOf(navigator.platform) !== -1
}
