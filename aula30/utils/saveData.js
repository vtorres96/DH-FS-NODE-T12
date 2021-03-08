const fs = require("fs");
const path = require("path");

const saveData = (array, fileName) => {
  /* transformando o array recipes em uma string */
  let dataString = JSON.stringify(array);

  /* obtendo o caminho ate o arquivo data/recipe.js */
  let filePath = path.join('data', fileName);

  /* escrevendo o conteudo arquivo recipe.js */
  fs.writeFileSync(filePath, 'module.exports = ');
  fs.appendFileSync(filePath, dataString);
}

module.exports = saveData;