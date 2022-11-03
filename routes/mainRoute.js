const route = require('express').Router();
const MainPage = require('../views/MainPage.jsx');

route.get('/', (req, res) => {
  res.renderComponent(MainPage, { title: 'Start Page' });
});

module.exports = route;
