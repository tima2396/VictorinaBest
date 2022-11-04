const route = require('express').Router();
const MainPage = require('../views/MainPage.jsx');
const { Theme } = require('../db/models');

route.get('/', async (req, res) => {
  const tems = await Theme.findAll({ raw: true });
  res.renderComponent(MainPage, { title: 'Start Page', tems });
});

module.exports = route;
