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
