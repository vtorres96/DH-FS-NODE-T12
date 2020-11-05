const express = require('express');

// criando aplicacao express
const app = express();

// importando rotas da aplicacao
const routes = require("./routes/routes");

// indicando que a aplicacao ira trabalhar com as rotas
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta: 3000")
});