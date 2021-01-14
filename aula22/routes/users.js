var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:nome', function(req, res, next) {
  let nome = req.params.nome;

  res.send('Olá ' + nome);
});

module.exports = router;