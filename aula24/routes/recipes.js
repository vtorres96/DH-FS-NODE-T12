var express = require('express');
var router = express.Router();

const RecipeController = require("../controllers/RecipeController");

/* GET home page. */
router.get('/', RecipeController.index);

/* POST salvar receitas */
router.post('/save', RecipeController.save);

/* GET para excluir receita */
router.get('/delete/:id', RecipeController.delete);

/* GET alterar receita */
router.get('/edit/:id', RecipeController.edit);

/* POST para alterar receita */
router.post('/update/:id', RecipeController.update);

module.exports = router;