DESAFIO DE UM PROCESSO SELETIVO AO VIVO

# Primeira Etapa - 5 minutos 
  1 - Criar um repositório no github <br/>
  2 - Clonar o repositório para a máquina <br/>
 
# Segunda Etapa - 10 minutos 
  1 - Iniciem um arquivo package.json (através do npm) <br/>
  2 - Adicionar os módulos express e cors no projeto <br/>
  3 - Criar o arquivo .gitignore na raíz do projeto e adicionar a pasta node_modules <br/>
  4 - Criar um arquivo src/index.js <br/>
  5 - Tornar o index.js o servidor da aplicação <br/>
  6 - Startar o servidor <br/>

# Terceira Etapa - 3 minutos 
  1 - Criar a propriedade start no package.json para a aplicação rodar com o comando npm start <br/>
  2 - Adicionar na propriedade start o nodemon para que não tenhamos necessidade de ficar atualizando o projeto <br/>

# Quarta Etapa - 8 minutos 
  1 - Criar uma arquivo src/routes/index.js <br/>
  2 - Criar uma rota '/' que retorne Hello World na tela (podem fazer a função no segundo parâmetro sem criar controller) <br/>
  3 - Importar as rotas no arquivo src/index.js

# Quinta Etapa - 20 minutos 
  1 - Criar o banco de dados to_do_list <br/>
  2 - Criar o arquivo .sequelizerc na raíz do projeto, exportando as informações de config, models-path e migrations-path <br/> 
  3 - Criar o arquivo src/config/database.js efetuando conexao com o banco de dados to_do_list <br/> 
  4 - Adicionar o módulo sequelize e sequelize-cli (sequelize-cli como dependência de desenvolvimento) no projeto<br/> 
  5 - Criar uma migration de tasks, nome do arquivo deverá ser database/create_tasks_table.js nessa migration devemos ter as colunas: <br/> 
    id - Primary Key, Auto Increment, Integer, Not Null <br/>
    title - String, <br/>
    description - String, <br/>
    done - Boolean, <br/>
    deleted - Boolean <br/> 
  6 - Migrar a tabela tasks para o banco de dados, caso receba
  o erro a seguir: Please install mysql2 package manually. <br/>
  Instale o módulo mysql2 no projeto. <br/>

  # Quinta Etapa - 9 minutos
    1 - Criar o arquivo src/models/index.js (a partir de um comando do sequelize)
    2 - Criar o arquivo src/models/Task.js
    3 - Criar definição/configuração do model

  # Sexta Etapa - 26 minutos
  1 - Criar o arquivo src/controllers/TaskController.js
  2 - Configurar os métodos create, index, getById, update, delete