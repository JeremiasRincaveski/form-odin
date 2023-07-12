const inputs = Array.from(document.querySelectorAll('input'))
const btn = document.querySelector('button[type="submit"]')
inputs.forEach(input => {
  input.addEventListener('change', validaTemAlgo)
})

const tiposErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'rangeUnderflow',
  'rangeOverflow',
  'customError'
]

const erroCustomizado = {
  valueMissing: 'Preencha este campo',
  typeMismatch: 'Tipo inválido',
  patternMismatch: 'Valor inválido',
  tooShort: 'Valor muito curto',
  rangeUnderflow: 'Valor muito baixo',
  rangeOverflow: 'Valor muito alto',
  customError: 'Valor inválido'
}

function validaTemAlgo(e) {
  const input = e.target
  const div = input.parentNode
  if (input.value) {
    input.classList.add('valido')
    div.classList.remove('invalido')
  } else {
    input.classList.remove('valido')
  }
}

function validaErro(e) {
  inputs.forEach(input => {
    const pai = input.parentNode
    const span = pai.querySelector('span')
    const erro = tiposErro.find(erro => input.validity[erro])
    if (erro) {
      pai.classList.add('invalido')
      span.innerHTML = erroCustomizado[erro]
    } else {
      pai.classList.remove('invalido')
      span.innerHTML = ''
    }
    
    const senha = document.querySelector('input[id="password"]')
    const confirmaSenha = document.querySelector('input[id="passwordConfirm"]')

    if (senha.value !== confirmaSenha.value) {
      senha.parentElement.classList.add('invalido')
      senha.parentElement.querySelector('span').innerHTML = '* Senhas não conferem'
      confirmaSenha.parentNode.classList.add('invalido')
      confirmaSenha.parentNode.querySelector('span').innerHTML = '* Senhas não conferem'
    }
  })
}

btn.addEventListener('click', validaErro)