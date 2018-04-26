const crel = require('crel')
const mobx = require('mobx')
const render = require('./render.js')

const viewport = crel('div', crel('div'))
document.body.appendChild(viewport)

const state = mobx.observable({
  input: '1+8*',
  output: '',
})

function update(state) {
  const view = render(state)
  viewport.replaceChild(view, viewport.firstElementChild)
}

mobx.autorun(() => update(state))
