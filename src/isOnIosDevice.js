// Returns `true` on an iPhone, iPad, or iPod.
export default function isOnIosDevice() {
  return ['iPhone', 'iPad', 'iPod'].indexOf(navigator.platform) !== -1
}
