const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('Você está na home page');
})

// Desafio - Criar uma rota parametrizada, que irá se chamar /cumprimentar 
// e terá um parâmetro que será um nome, logo, ele terá que receber esse parâmetro
// que foi informado e exibir uma mensagem de cumprimento "Olá, nome".

// criando rota parametrizada
app.get('/cumprimentar/:nome', (req, res) => {
  let { nome } = req.params

  res.send("Olá, " + nome);
})

// Desafio - Criar uma rota parametrizada, que irá se chamar /calcular 
// e terá dois parâmetros que serão números, caso, receba apenas o primeiro parâmetro, 
// deverá retornar ele, ou, caso recebe os dois parâmetros terá que somar os dois e retornar
// o resultado.

// criando rota parametrizada como parâmetros opcionais
app.get('/calcular/:numero1/:numero2?', (req, res) => {
  let { numero1, numero2 } = req.params;

  if(typeof numero2 !== "undefined"){
    let resultado = parseInt(numero1) + parseInt(numero2)
    res.send("O valor da soma entre os parâmetros informados na URL é: " + resultado);
  } else {
    res.send("O valor do primeiro parâmetro informado na URL é: " + numero1);
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta: 3000")
})