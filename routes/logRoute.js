const route = require('express').Router();
const LoginPage = require('../views/LoginPage.jsx');
const { User } = require('../db/models');
// const users = [{ id: 1, tem: 'sadasd' }]
route.get('/', async (req, res) => {
  res.renderComponent(LoginPage, { title: 'Start Page' });
});

route.post('/', async (req, res) => {
  const { login, password } = req.body;
  const userLoginDb = await User.findOne({ where: { login } });
  // console.log(userLoginDb);
  if (userLoginDb) {
    if (userLoginDb.password === password) {
      res.redirect('/');
    } else {
      console.log('Неверный пароль');
    }
  }
});
module.exports = route;
