let form = document.querySelector('#searchForm')
let username = document.querySelector('input[name="username"]')

form.onsubmit = function(event) {
  event.preventDefault()
  console.log('o usuário buscado é: ' + username.value)
}