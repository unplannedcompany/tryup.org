import 'normalize.css'
import './app.scss'
import { Up } from 'write-up'


document.addEventListener('DOMContentLoaded', () => { 
  const markup = document.getElementById('markup')
  const rendered = document.getElementById('rendered')

  markup.onkeyup = debounce(() => {
    rendered.innerHTML = Up.toHtml(markup.value)
  }, 1000)
})


function debounce(callback, delay) {
  let timeoutHandle

  return () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }

    timeoutHandle = setTimeout(callback, delay)
  }
}