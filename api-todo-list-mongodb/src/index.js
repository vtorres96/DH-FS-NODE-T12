const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const connection = require('./config/database')

const routes = require('./routes/index')

const app = express()

mongoose.connect(connection.connectionString, connection.config)

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('Servidor rodando na porta http://localhost:3333')
})