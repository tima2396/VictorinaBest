const route = require('express').Router();
const RegPage = require('../views/RegPage.jsx');
const { User } = require('../db/models');

route.get('/', async (req, res) => {
  res.renderComponent(RegPage, { title: 'Start Page' });
});

route.post('/', async (req, res) => {
  const { login, password, passwordRepeat } = req.body;
  console.log({ login });
  const user = await User.findOne({ where: { login } });
  if (!user) {
    if (login.length === 0 || password.length === 0 || passwordRepeat.length === 0) {
      console.log('zapolni vse stroki');
      return;
    }
    if (password !== passwordRepeat) {
      console.log('paroli ne sovpadayut');
      return;
    }
    const data = await User.create({ login, password });
    res.json(data);
    // res.redirect('/');
    // zapolni db
    // res.status(200).json({ status: 'ok', url: '/' });
  }
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
