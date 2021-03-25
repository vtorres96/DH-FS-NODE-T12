// Aula 1
// verificar se o arquivo esta sendo importado corretamente no arquivo html
// console.log('Hello World');

// criar um prompt, de forma que ao receber o nome do usuario, seja exibido
// no console
// let nome = prompt('Digite seu nome no campo abaixo');
// console.log('Nome: ' + nome);

// bloquear usuario menor de idade de acessar a pagina
// let maiorDeIdade = confirm('Você confirma ter ao menos 18 anos ?');

// if(!maiorDeIdade){
//   window.location.reload();
// }

// selecionando elementos com querySelector e querySelectorAll
// document.querySelector - seleciona apenas primeiro elemento encontrado
// document.querySelectorAll - seleciona todos elementos encontrados retornando uma lista
// Formas de utilizar/selecionar elementos:
// - por ID: document.querySelector('#navbarNav');
// - por Classe: document.querySelector('.navbar-nav');
// - por tag: document.querySelector('ul');
// - por tag com classe: document.querySelector('ul.navbar-nav'); <ul class="navbar-nav"></ul>
// - por tag com id: document.querySelector('div#navbarNav'); <div id="navbarNav"></div>

// selecionando elementos apenas pela tag - getElementByTagName
// document.getElementsByTagName('h1') - sempre tem a necessidade que receber como 
// parâmetro uma tag e não podemos utilizar ela junto as classes ou id's. Como por exemplo:
// 'h1.titulo', isso já não funcionaria. Lembrando que caso exista mais de um elemento,
// seleciona todos elementos retornando uma lista, ou, caso não encontre elementos retorna vazio.

// selecionando elementos apenas pelo ID - getElementById
// document.getElementById('navbarNav') - sempre tem a necessidade de receber como 
// parâmetro um ID existente em uma tag. Lembrando, caso exista o elemento com o ID
// retorna o único elemento encontrado (devido ID ser único para cada elemento, portanto,
// este método sempre retornará apenas um elemento), ou, caso não encontre retorna null.

// selecionando elementos apenas pela classe - getElementsByClassName
// document.getElementsByClassName('navbar-nav') - sempre tem a necessidade de receber como 
// parâmetro uma classe existente em uma tag. Lembrando, caso exista o elemento com a classe
// retorna o elemento encontrado, ou, caso existam mais elementos, retorna uma lista
// , porém, caso não encontre, retorna vazio.

// Introducao a aula 2
// 1 - Procurar no arquivo index.html a tag img referente ao logo do nosso site, e, adicionar uma 
// classe nova, por exemplo, classe logo
// 2 - capturar o elemento com a classe logo, e, armazenar em uma variavel
// let logo = document.querySelector('.logo');

// // mouseover - evento disparado ao posicionar o cursor sobre o elemento com a classe logo
// logo.addEventListener('mouseover', function(){
//   console.log('passou o cursor em cima do logo')
// });

// AULA 3 - 24/03/2021

// 1 - FAZENDO O LOGO GIRAR AO PASSAR O MOUSE POR CIMA

const logo = document.querySelector('.logo'); // BUSCAR A IMAGEM COM A CLASSE "logo"

logo.addEventListener('mouseover', () => { //ADICIONANDO O EVENTO DE MOUSEOVER PARA QUANDO O MOUSE PASSAR POR CIMA DO LOGO
  logo.style.transform = 'rotate(180deg)'; //FAZENDO O ELEMENTO ROTACIONAR PARA O ÂNGULO DE 180 GRAUS
});

logo.addEventListener('mouseout', () => { //ADICIONANDO O EVENTO DE MOUSEOUT PARA QUANDO O MOUSE SAIR DE CIMA DO LOGO
  logo.style.transform = 'rotate(0)';     // FAZENDO O ELEMENTO VOLTAR PARA O ANGULO ANTERIOR
});

// OUTRA OPÇÃO

// logo.onmouseover = () => logo.style.transform = 'rotate(180deg)';
// logo.onmouseout = () => logo.style.transform = 'rotate(0)';

// 2 - FAZENDO O HEADER FICAR TRANSPARENTE NO TOPO DA PÁGINA E REMOVER A TRANSPARÊNCIA QUANDO DER SCROLL PARA BAIXO

const header = document.querySelector('#mainNav'); //BUSCANDO O HEADER COM O ID "mainNav"

window.onscroll = () => { //ACESSANDO O EVENTO DE SCROLL DO WINDOW
  if (window.pageYOffset == 0) { //VERIFICANDO SE O TOPO DA JANELA ESTÁ ALINHADO COM O TOPO DA PÁGINA
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'; // ADICIONANDO UMA COR TRANSPARENTE DE FUNDO NO HEADER
  } else {  //QUANDO DER SCROLL PARA BAIXO
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // MUDANDO A COR DE FUNDO PARA BRANCO SEM TRANSPARÊNCIA
  }
  
};

// OUTRA OPÇÃO

// window.onscroll = () => {
//   header.style.backgroundColor = `rgba(255,255,255, ${window.pageYOffset == 0 ? '0.7' : '1'})`
// }

// 3 - FAZENDO AS IMAGENS DO CARD AUMENTAREM DO TAMANHO AO PASSAR O MOUSE

const imagensDosCards = document.querySelectorAll('.ser-icon .img-fluid'); // BUSCANDO TODAS AS IMAGENS

imagensDosCards.forEach((imagem) => { // CRIANDO UM LOOP PARA ADICIONAR O EVENTO POR CADA IMAGEM DO ARRAY

  imagem.addEventListener('mouseover', function(){ // ADICIONANDO O EVENTO DE MOUSEOVER
    this.classList.toggle('grow'); // ADICIONANDO A CLASSE "grow" NA IMAGEM
  });

  imagem.addEventListener('mouseout', function(){ //ADICIONANDO O EVENTO DE MOUSEOUT
    this.classList.toggle('grow'); // REMOVENDO A CLASSE "grow" DA IMAGEM
  });

});

// *BÔNUS* ALTERNATIVA OFERECIDA PELO ALUNO PARA AUMENTAR O TAMANHO DO CARD AO INVÉS DA IMAGEM

// const cards = document.querySelectorAll('.services-inner-box'); // BUSCANDO TODAS OS CARDS

// cards.forEach((card) => { // CRIANDO UM LOOP PARA ADICIONAR O EVENTO POR CADA CARD DO ARRAY

//   card.addEventListener('mouseover', function(){ // ADICIONANDO O EVENTO DE MOUSEOVER
//     this.classList.toggle('grow'); // ADICIONANDO A CLASSE "grow" NO CARD
//   });

//   card.addEventListener('mouseout', function(){ //ADICIONANDO O EVENTO DE MOUSEOUT
//     this.classList.toggle('grow'); // REMOVENDO A CLASSE "grow" DO CARD
//   });

// });