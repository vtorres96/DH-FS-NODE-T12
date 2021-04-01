let form = document.querySelector('#searchForm')
let username = document.querySelector('input[name="username"]')
let repositoriesContent = document.querySelector('#repositories')

form.onsubmit = function(event) {
  event.preventDefault()
  let statusResponse
  let repositories = []

  fetch(`https://api.github.com/users/${username.value}/repos`)
  .then(response => {
    // capturando o status da resposta ao efetuar fetch na API do Github
    // se for 200 quer dizer que encontrou o usuário pesquisado, caso
    // retorne 404 quer dizer que não encontrou o usuário
    statusResponse = response.status
    return response.json()
  })
  // capturar apenas os nomes de cada repositório em uma variável
  .then(data => {
    if(statusResponse == 200){
      // criar array de repositorios capturando apenas o nome 
      // e a URL que redireciona para o repositório
      data.forEach(element => {
        repositories.push({
          name: element.name, 
          html_url: element.html_url
        })
      })

      // percorrendo todos repositórios e exibindo na tela do usuário
      repositories.forEach(repository => {
        repositoriesContent.innerHTML += `
          <div class="col-12 col-md-6 col-lg-4 mt-3">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${repository.name}</h5>
                <a href="${repository.html_url}" class="btn btn-primary">Visitar Repositório</a>
              </div>
            </div>
          </div>
        `
      })  
    } else {
      repositoriesContent.textContent = 'Não encontramos o usuário ' + username.value
    }
  })
}
