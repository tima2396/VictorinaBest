const route = require('express').Router();

const { where } = require('sequelize');
const ThemePage = require('../views/ThemePage.jsx');
const {
  Question, Theme, User, Total,
} = require('../db/models');

route.get('/:id/:a', async (req, res) => {
  const { id, a } = req.params;
  const tems = await Question.findAll({ where: { idTheme: id } });
  const { login } = res.app.locals.user;
  const user = await User.findOne({ where: { login }, raw: true });
  console.log(user.id);

  if (Number(a) === 0) {
    await Total.create({ userId: user.id, score: 0, idTheme: id });
  }
  if (Number(a) < 3) {
    res.renderComponent(ThemePage, {
      title: 'Start Page', tems: tems[a], i: a, id,
    });
  } else {
    res.redirect('/');
  }
});

route.post('/', async (req, res) => {
  const { answer, question, topic } = req.body;
  console.log(answer, question, topic);
  //   const themeDB = await Theme.findOne({where: {id:question}})
  //   console.log(themeDB);
  // console.log(topic);
  const answerFromDB = await Question.findOne({ where: { question: topic } });
  console.log(answerFromDB.answer);

  const { login } = res.app.locals.user;
  const user = await User.findOne({ where: { login }, raw: true });
  console.log(user.id);

  const newUser = await Total.findAll({ order: [['createdAt', 'DESC']], raw: true });
  // const newUser = await Total.findOne({ where: { userId: user.id }, raw: true });
  console.log(newUser[0]);

  if (answer === answerFromDB.answer) {
    await Total.update({ score: newUser[0].score + 1 }, { where: { id: newUser[0].id } });
    res.json({ message: 'ok' });
  } else {
    res.json({ message: 'no ok' });
  }
//   res.app.locals.user = { login };
//   console.log(res.app.locals.user);
//   const userLoginDb = await User.findOne({ where: { login } });
//   if (!userLoginDb) {
//     return res.status(403).json({ status: 'error', message: 'Такой пользователь не зарегистрирован.' });
//   }
//   if (userLoginDb.password !== password) {
//     return res.status(403).json({ status: 'error', message: 'Пароль не верный' });
//   }
//   return res.status(201).json({ status: 'success', url: '/' });
});

module.exports = route;
