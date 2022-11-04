const route = require('express').Router();
const RegPage = require('../views/RegPage.jsx');
const users = [{ id: 1, tem: 'sadasd' }]
route.get('/', async (req, res) => {
  res.renderComponent(RegPage, { title: 'Start Page' });
});

module.exports = route;
