var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');

/* retornando formulario de cadastro de usuarios */
router.get('/create', UserController.create);

/* processando requisicao do formulario de cadastro para salvar usuario */
router.post('/save', UserController.save);

/* retornando formulario de login de usuarios */
router.get('/login', UserController.login);

/* processando requisicao do formulario de login para autenticar usuario */
router.post('/authenticate', UserController.authenticate);

/* processando requisição para efetuar logout */
router.get('/logout', UserController.logout);

module.exports = router;