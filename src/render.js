const crel = require('crel')

function render(state) {
  function renderScreen() {
    return crel('input', {
      value: state.input,
    })
  }

  function renderOutput() {
    return crel('code', state.output)
  }

  function renderButton(val) {
    const button = crel('button', val)
    button.addEventListener('click', function (event) {
      state.input += val
    })
    return button
  }

  function renderClearButton() {
    const button = crel('button', 'clr')
    button.addEventListener('click', function (event) {
      state.input = ''
    })
    return button
  }

  function renderEvalButton() {
    const button = crel('button', '=')
    button.addEventListener('click', function (event) {
      const result = eval(state.input)
      state.output = result
    })
    return button
  }

  function renderButtons() {
    const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map(val => renderButton(val))
    const operations = ['+', '-', '*', '/'].map(val => renderButton(val))
    return crel('div', buttons, operations, renderClearButton(), renderEvalButton())
  }

  return crel('div',
    renderScreen(),
    renderOutput(),
    renderButtons()
  )
}

module.exports = render