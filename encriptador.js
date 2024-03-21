const chaves = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
}

function encriptar() {
  const input = document.querySelector('#input')
  const output = document.querySelector('#output')

  if (!input.value) {
    esconder(true)
    return
  }

  const inputTexto = String(input.value)
  const textoEncriptado = inputTexto
    .replaceAll('e', chaves.e)
    .replaceAll('i', chaves.i)
    .replaceAll('a', chaves.a)
    .replaceAll('o', chaves.o)
    .replaceAll('u', chaves.u)

  output.value = textoEncriptado
  esconder()
}

function desencriptar() {
  const input = document.querySelector('#input')
  const output = document.querySelector('#output') 
  
  if (!input.value) {
    esconder(true)
    return
  }

  const inputTexto = String(input.value)
  const textoDesencriptado = inputTexto
  .replaceAll(chaves.e, 'e')
  .replaceAll(chaves.i, 'i')
  .replaceAll(chaves.a, 'a')
  .replaceAll(chaves.o, 'o')
  .replaceAll(chaves.u, 'u')
  
  output.value = textoDesencriptado
  esconder()
}

function copiarTexto() {
  const output = document.querySelector('#output')
  if (!output.value) return
  window.navigator.clipboard.writeText(output.value)
}

function esconder(vazio = false) {
  const containerWithoutText = document.querySelector('#semTexto')
  const containerWithText = document.querySelector('#comTexto')

  if (vazio) {
    containerWithoutText.classList.remove('hidden')
    containerWithText.classList.add('hidden')
    return
  }

  containerWithoutText.classList.add('hidden')
  containerWithText.classList.remove('hidden')
}
