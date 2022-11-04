const route = require('express').Router();
const LoginPage = require('../views/LoginPage.jsx');
const { User } = require('../db/models');

route.get('/', async (req, res) => {
  res.renderComponent(LoginPage, { title: 'Start Page' });
});

route.post('/', async (req, res) => {
  const { login, password } = req.body;
  res.app.locals.user = { login };
  console.log(res.app.locals.user);
  const userLoginDb = await User.findOne({ where: { login } });
  if (!userLoginDb) {
    return res.status(403).json({ status: 'error', message: 'Такой пользователь не зарегистрирован.' });
  }
  if (userLoginDb.password !== password) {
    return res.status(403).json({ status: 'error', message: 'Пароль не верный' });
  }
  return res.status(201).json({ status: 'success', url: '/' });
});

// route.post('/reg', (req, res) => {
//   req.body?
//   create()?
//   res.app.locals.user = req.body.user
//   redirect('/')

// })

// route.post('/auth', (req, res) => {
//   req.body ?
//   findBy()
//   res.app.locals.user = req.body.user

// })

// route.get('/logout', ())

module.exports = route;
