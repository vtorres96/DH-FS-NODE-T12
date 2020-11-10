const express = require("express");
const router = express.Router();
const PrimeiroController = require("../controllers/PrimeiroController");

router.get('/', PrimeiroController.index);
router.post('/postIndex', PrimeiroController.postIndex);
// Desafio - Criar uma rota parametrizada, que irá se chamar /cumprimentar 
// e terá um parâmetro que será um nome, logo, ele terá que receber esse parâmetro
// que foi informado e exibir uma mensagem de cumprimento "Olá, nome".

// criando rota parametrizada
router.get('/cumprimentar/:nome', PrimeiroController.cumprimentar);

// Desafio - Criar uma rota parametrizada, que irá se chamar /calcular 
// e terá dois parâmetros que serão números, caso, receba apenas o primeiro parâmetro, 
// deverá retornar ele, ou, caso recebe os dois parâmetros terá que somar os dois e retornar
// o resultado.

// criando rota parametrizada como parâmetros opcionais
router.get('/calcular/:numero1/:numero2?', PrimeiroController.calcular);

// criando rota parametrizada com query params que serao informados na url
router.get('/query/:nome', PrimeiroController.getQueryParams);

module.exports = router;