const moment = require("moment")

const listarPets = (pets) => {
  pets.forEach((pet) => {
    console.log("Nome: " + pet.nome + "\n" + "Tipo: " + pet.tipo);
  });
  console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}

const validaDados = (objetoPet) => {
  return (
    typeof objetoPet.nome === 'string' &&
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' &&
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' &&
    typeof objetoPet.vacinado === 'boolean'
  ) 
}

const cadastrarPet = (pets, objetoPet) => {
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

const servicosPrestados = (pet, servicoRealizado) => {
  servicoRealizado(pet)
}

const darBanhoNoPet = (pet) => {
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push("banho na data " + data);
  console.log("O pet " + pet.nome + " tomou banho");
}

const tosarPet = (pet) => {
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push("tosa na data " + data);
  console.log("O pet " + pet.nome + " foi tosado");
}

const cadastrarPetsSpreadOperator = (pets, json) => {
  let arrayPetsJson = JSON.parse(json);
  pets.push(...arrayPetsJson)

  return pets
}

const cadastrarPetsFor = (pets, json) => {
  let arrayPetsJson = JSON.parse(json)

  for (let index = 0; index < arrayPetsJson.length; index++) {    
    pets.push(arrayPetsJson[index])
  }

  return pets
}

const filtrarPetPorNome = (lista, nomePet) => {
  let petsFiltrados = lista.filter((pet) => {
    return pet.nome == nomePet
  });

  if(petsFiltrados.length > 0){
    return petsFiltrados
  } else {
    return "Nenhum pet foi encontrado com o nome " + nomePet
  }
}

const contagemDePets = (pets) => {
  let vacinados = 0;
  let naoVacinados = 0;

  pets.filter((pet) => {
    if(pet.vacinado){
      vacinados++
    } else {
      naoVacinados++
    }
  })
  console.log("temos " + vacinados + " pets vacinados");
  console.log("temos " + naoVacinados + " pets nao vacinados");
}

const removerPet = (id, lista) => {
  let pet = lista.filter((pet) => {
    return pet.id == id
  });

  if(pet.length > 0){
    pets.splice(id - 1, 1)
    console.log(pets)
  } else {
    console.log("Não encontramos nenhum pet com o id: " + id)
  }
}

module.exports = { 
  listarPets,
  cadastrarPet,
  servicosPrestados,
  darBanhoNoPet,
  tosarPet,
  cadastrarPetsSpreadOperator,
  cadastrarPetsFor,
  filtrarPetPorNome,
  contagemDePets,
  removerPet
}