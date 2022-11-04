const route = require('express').Router();
const RegPage = require('../views/RegPage.jsx');
const { User } = require('../db/models');

route.get('/', async (req, res) => {
  res.renderComponent(RegPage, { title: 'Start Page' });
});

route.post('/', async (req, res) => {
  const { login, password, passwordRepeat } = req.body;
  const user = await User.findOne({ where: { login } });
  if (!user) {
    if (login.length === 0 || password.length === 0 || passwordRepeat.length === 0) {
      return res.status(403).json({ status: 'error', message: 'Заполните все поля.' });
    }
    if (password !== passwordRepeat) {
      return res.status(403).json({ status: 'error', message: 'Пароли должны совпадать.' });
    }
    await User.create({ login, password });

    return res.status(201).json({ status: 'success', url: '/' });
  }
});

module.exports = route;
