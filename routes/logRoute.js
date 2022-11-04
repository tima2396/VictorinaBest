const route = require('express').Router();
const LoginPage = require('../views/LoginPage.jsx');
//const users = [{ id: 1, tem: 'sadasd' }]
route.get('/', async (req, res) => {
  res.renderComponent(LoginPage, { title: 'Start Page' });
});

module.exports = route;
