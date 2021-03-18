const axios = require('axios')

const buscaUsuarioGithub = async (userName) => {
  let { data } = await axios.get(`https://api.github.com/users/${userName}`)
  console.log(data)
}

buscaUsuarioGithub('vtorres96')