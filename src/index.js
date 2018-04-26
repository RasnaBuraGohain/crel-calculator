const crel = require('crel')
const mobx = require('mobx')
const render = require('./render.js')
require('./index.css')

const viewport = crel('div', crel('div'))
document.body.appendChild(viewport)

const state = mobx.observable({
  input: '' ,
  output: '',
})

function update(state) {
  const view = render(state)
  viewport.replaceChild(view, viewport.firstElementChild)
}

mobx.autorun(() => update(state))
