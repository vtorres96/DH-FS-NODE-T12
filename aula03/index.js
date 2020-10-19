// criação de uma variável com let recebendo valor de uma string
let nome = 'Pet Shop NodeJS DH'

// exibindo valor da variável nome no console
console.log(nome)

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
  {
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
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
// listarPets()

// Desafio 4 - Criar uma função que adicione pets na nossa lista de pets
// (adicionar elementos no array de objetos), lembrando, que teremos que fazer isso testando no terminal

// Desafio 4.1 - criar uma validação para certificar se realmente estamos
// recebendo um objeto para cadastrar o pet, caso tenha sido informado como
// parametro um objeto então iremos adicioná-lo, caso contrário, iremos 
// exibir uma mensagem de erro "Informe um objeto válido para cadastrar um novo pet"

// Desafio 5 - Criar uma funcao de titulo validaDados que ira validar se o objeto passado como parâmetro
// possui todas as propriedades necessárias, que são: nome (string), tipo (string), raca (string), 
// idade (number), genero (string) e vacinado (boolean)
function validaDados(objetoPet){
  return (
    typeof objetoPet.nome === 'string' &&
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' &&
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' &&
    typeof objetoPet.vacinado === 'boolean'
  ) 
}

function cadastrarPet(objetoPet){
  if (typeof objetoPet == "object") {  
    if(validaDados(objetoPet)){
      pets.push(objetoPet)
      console.log(pets)
    } else {
      console.log("O objeto informado não possui todas as propriedades necessárias")
    }
  } else {
    console.log("Informe um objeto para cadastrar um novo pet")
  }
}

let novoPet = {
  nome: 'Novo Pet',
  tipo: 'gato',
  raca: 'siames',
  idade: 3,
  genero: 'Fêmea',
  vacinado: false
}

// cadastrarPet(novoPet)

// calback
function calcular(numero1, numero2, operacao){
  operacao(numero1, numero2)
  console.log("A operação foi realizada com sucesso")
}

function soma(numero1, numero2){
  console.log(numero1 + numero2)
}

function subtrai(numero1, numero2){
  console.log(numero1 - numero2)
}

function multiplica(numero1, numero2){
  console.log(numero1 * numero2)
}

function divide(numero1, numero2){
  console.log(numero1 / numero2)
}

// calcular(10, 20, soma)
// calcular(20, 10, subtrai)
// calcular(10, 20, multiplica)
// calcular(10, 2, divide)