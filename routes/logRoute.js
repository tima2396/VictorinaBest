const route = require('express').Router();
const LoginPage = require('../views/LoginPage.jsx');
const User = require('../db/models/user');
// const users = [{ id: 1, tem: 'sadasd' }]
route.get('/', async (req, res) => {
  res.renderComponent(LoginPage, { title: 'Start Page' });
});
route.post('/', async (req, res) => {
  const { login, password } = req.body;
  const usesFromDb = await User.findOne({ where: { login } });
  if (usesFromDb) {
    res.redirect('/');
  } else {
    res.redirect('/reg');
  }
});

module.exports = route;
