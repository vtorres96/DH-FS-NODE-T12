// criação de uma variável com let recebendo valor de uma string
let nome = 'Pet Shop NodeJS DH'

// exibindo valor da variável nome no console
console.log(nome)

// criacao de array com alguns itens para que possamos percorrer
let animais = ['Leão', 'Cavalo', 'Cachorro'];

// Desafio 1 - Percorrer o array de animais da variável array e listá-los no terminal

// utilizando for comum para percorrer array de animais
for (let i = 0; i < animais.length; i++) {
  console.log(animais[i]);
}

// utilizando for of para percorrer array de animais, repare que a sintaxe é mais simples
// e no fim das contas obtemos o mesmo efeito, portanto, fica a seu critério em decidir
// qual dos dois formatos irá implementar
for (let item of animais){
  console.log(item)
}

// criacao de um objeto que possui características que pertencam ao mesmo contexto,
// neste caso abaixo, estamos criando uma variável pessoa com as propriedades nome e idade
let pessoa = {
  nome: 'Victor',
  idade: 99
}

// Desafio 2 - Percorrer o objeto da variável pessoa, e demonstrando como obtemos a propriedade,
// e, respectivamente o valor daquela propriedade em questão
for (let item in pessoa) {
  console.log("Propriedade: " + item + " valor da propriedade " + pessoa[item])
}

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
  {
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true
  },
  {
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false
  }
];

// Desafio 3 - Criar uma função que percorra a lista de pets e
// listar a seguinte mensagem para cada pet "Nome: nome Do Pet" 
// e também uma mensagem para o tipo para cada pet "Tipo: tipo Do Pet"
// E por fim, retornar uma mensagem contendo a quantidade total de pets cadastrados no nosso sistema
function listarPets() {
  for (let i = 0; i < pets.length; i++) {
    console.log("Nome: " + pets[i].nome + "\n" + "Tipo: " + pets[i].tipo);
  }
  console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}

// executando a função de listarPets() para que ela retorne a execução no console,
// trazendo o nome e o tipo do pet, e, por fim contando a quantidade total de pets cadastrados
listarPets()