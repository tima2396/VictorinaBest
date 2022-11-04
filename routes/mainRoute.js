const route = require('express').Router();
const MainPage = require('../views/MainPage.jsx');
// const { Tem } = require('../db/models');
const { Theme, Question } = require('../db/models');

route.get('/', async (req, res) => {
  const tems = await Theme.findAll({ raw: true });

  // res.renderComponent(MainPage, { title: 'Start Page', tems });
  res.renderComponent(MainPage, { title: 'Start Page', tems });
});

// route.get('/:idTheme', async (req, res) => {
//   const quests = await Question.findAll({ raw: true });
//   res.renderComponent(Theme, { title: 'Theme page', quests });
// });

module.exports = route;
