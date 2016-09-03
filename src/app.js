require('./app.scss')
import { Up } from 'write-up'


const $ = document.getElementById.bind(document)

document.addEventListener('DOMContentLoaded', () => {
  $('convert').onclick = () => {
    const html = Up.toHtml($('markup').value)
    $('rendered').innerHTML = html
  }
})