var express = require('express');
var router = express.Router();

const RecipeController = require("../controllers/RecipeController");

/* GET home page. */
router.get('/', RecipeController.index);

/* POST salvar receitas */
router.post('/save', RecipeController.save);

module.exports = router;