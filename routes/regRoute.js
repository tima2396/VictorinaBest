const route = require('express').Router();
const RegPage = require('../views/RegPage.jsx');
const { User } = require('../db/models');

route.get('/', async (req, res) => {
  res.renderComponent(RegPage, { title: 'Start Page' });
});

route.post('/', async (req, res) => {
  const { login, password } = req.body;
  const data = await User.create(login, password);
  res.json(data);
});

module.exports = route;
