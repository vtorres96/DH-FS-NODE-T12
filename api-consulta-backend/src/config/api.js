const axios = require('axios')

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

module.exports = api