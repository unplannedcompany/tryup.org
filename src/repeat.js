// Returns a new string consisting of `count` copies of `text`
export default function repeat(text, count) {
  return new Array(count + 1).join(text)
}
