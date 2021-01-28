const recipes = require("../data/recipe");
const saveData = require("../utils/saveData");

// 1ª forma que voces podem encontrar de exportar metodos do controller
module.exports = {
  index(req, res, next){
    res.render('recipes', { recipes: recipes });
  },

  save(req, res, next){
    /* criando um id sequencial, obtendo a
    quantidade de elementos no array recipes e somando + 1 */
    let id = recipes.length + 1;

    /* montando objeto para seguir padrao dentro do arquivo data/recipe.js */
    let recipe = { id, ...req.body };
    
    /* adcionando objeto criado dentro do array recipes */
    recipes.push(recipe);

    // executando funcao que salva alteracoes dos registros no arquivo recipe.js
    saveData(recipes, 'recipe.js');

    res.redirect('/recipes');
  },

  async edit(req, res, next){
    let id = req.params.id;

    // obter a receita para altera-la
    let recipe = recipes.find(recipe => recipe.id == id);

    res.render('edit-recipe', { recipe });
  },

  async update(req, res, next){
    let id = req.params.id;
    let { nome, email, mensagem } = req.body;

    // obter a receita para altera-la
    let recipe = recipes.find(recipe => recipe.id == id);

    // Alterar as propriedades do objeto que desejamos fazer update
    recipe.nome = nome;
    recipe.email = email;
    recipe.mensagem = mensagem;

    // executando funcao que salva alteracoes dos registros no arquivo recipe.js
    saveData(recipes, 'recipe.js');

    res.render('edit-recipe', { recipe, updated: true });
  },

  async delete(req, res, next){
    let id = req.params.id;

    // forma de remover elemento do json
    let recipesFilter = recipes.filter(recipe => recipe.id != id);

    // executando funcao que salva alteracoes dos registros no arquivo recipe.js
    saveData(recipesFilter, 'recipe.js');

    res.render('recipes', { recipes: recipesFilter, deleted: true });
  }
}

// 2ª forma que voces podem encontrar de exportar metodos do controller
// const RecipeController = {
//   index: (req, res, next) => {
//     res.render('recipes');
//   }
// }

// module.exports = RecipeController