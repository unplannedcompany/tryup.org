// Returns `true` on an iPhone, iPad, or iPaod.
export default function isOnIosDevice() {
  // Based on this answer: http://stackoverflow.com/a/9039885/5667767
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}
