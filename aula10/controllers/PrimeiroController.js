module.exports = {
  index(req, res) {
    res.send('Você está na home page');
  },

  cumprimentar(req, res) {
    let { nome } = req.params
  
    res.send("Olá, " + nome);
  },

  calcular(req, res) {
    let { numero1, numero2 } = req.params;
  
    if(typeof numero2 !== "undefined"){
      let resultado = parseInt(numero1) + parseInt(numero2)
      res.send("O valor da soma entre os parâmetros informados na URL é: " + resultado);
    } else {
      res.send("O valor do primeiro parâmetro informado na URL é: " + numero1);
    }
  },

  getQueryParams(req, res) {
    let { nome } = req.params;
    let { sobrenome } = req.query;

    res.send('Olá, ' + nome + ' ' + sobrenome);
  }
};