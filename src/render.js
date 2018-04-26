const crel = require('crel')

function render(state) {
  function renderScreen() {
    const style = state.error == '' ? '' : 'background-color: red;'
    return crel('input', {
      value: state.input,
      disabled: true,
      style: style,
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

  function renderButtons() {
    const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map(val => renderButton(val))
    const operations = ['+', '-', '*', '/', '.'].map(val => renderButton(val))
    return crel('div', buttons, operations, renderEvalButton(), renderClearButton())
  }

  function renderEvalButton() {
    const button = crel('button', '=')
    button.addEventListener('click', function (event) {
      try {
        const result = eval(state.input)
        state.input = result
        state.error = ''
      } catch (error) {
        state.error = error
      }
    })
    return button
  }
  function renderClearButton() {
    const button = crel('button', { class: "clr" }, 'C')
    button.addEventListener('click', function (event) {
      state.input = ''
      state.error = ''

    })
    return button
  }

  return crel('div',
    renderScreen(),
    renderOutput(),
    renderButtons()
  )
}

module.exports = render