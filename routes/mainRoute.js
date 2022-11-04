const route = require('express').Router();
const MainPage = require('../views/MainPage.jsx');
// const { Tem } = require('../db/models');
const tems = [{ id: 1, tem: 'sadasd' }, { id: 2, tem: 'sadasd' }, { id: 3, tem: 'sadasd' }, { id: 4, tem: 'sadasd' }];
route.get('/', async (req, res) => {
  // const tems = await Tem.findAll({ raw: true });
  // res.renderComponent(MainPage, { title: 'Start Page', tems });
  res.renderComponent(MainPage, { title: 'Start Page', tems });
});

module.exports = route;
