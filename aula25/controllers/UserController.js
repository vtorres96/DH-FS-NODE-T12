const bcrypt = require('bcrypt');
const users = require('../data/user');
const saveData = require('../utils/saveData');

module.exports = {
  create(req, res, next){
    res.render('create-user');
  },

  save(req, res, next){
    let id = users.length + 1;
    /*  criptografando a senha */
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    /* criando objeto para enviar adicionar no array users */
    let user = { id, ...req.body };
    /* adicionando objeto dentro do array users */
    users.push(user);

    /* cadastrando no arquivo user.js que sera nosso json de usuarios */
    saveData(users, 'user.js');
    
    res.render('create-user', { added: true });
  },

  login(req, res, next){
    res.render('login');
  },

  authenticate(req, res, next){
    let { email, password } = req.body;
    let user = users.find(user => user.email == email);

    if(!user){
      return res.render('login', { notFound: true });
    }

    if(!bcrypt.compareSync(password, user.password)){
      return res.render('login', { notFound: true });
    }

    res.redirect('/');
  }
}