const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
  create(req, res, next){
    res.render('create-user');
  },

  async save(req, res, next){
    /*  criptografando a senha */
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    /* criando objeto para enviar adicionar no array users */
    let user = { ...req.body };

    /* adicionando objeto dentro do banco na tabeka users */
    await User.create(user);
    
    res.render('create-user', { added: true });
  },

  login(req, res, next){
    res.render('login');
  },

  async authenticate(req, res, next){
    let { email, password } = req.body;
    let user = await User.findOne({ where: { email } });

    if(!user){
      return res.render('login', { notFound: true });
    }

    if(!bcrypt.compareSync(password, user.password)){
      return res.render('login', { notFound: true });
    }
    
    // removendo o valor propriedade password para que o usuario logado nao trafegue com sua senha
    user.password = undefined;

    // criando sessao contendo informacoes do usuario que ira se logar
    req.session.user = user;

    res.redirect('/recipes');
  },

  logout(req, res, next){
    req.session.destroy();
    res.redirect('/');
  }
}