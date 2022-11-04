const router = require('express').Router();
const db = require('../db/models');
const Profil = require('../views/Profil.jsx');

const arr = [
  {
    userName: 'Petya',
    date: 'September 26,2015',
    totalQwestion: 30,
    correctAnswer: 13,
    totalScore: 65,
  },
  {
    userName: 'Kate',
    date: 'October 26,2015',
    totalQwestion: 33,
    correctAnswer: 20,
    totalScore: 75,
  },
];

router.get('/', async (req, res) => {
  const { login } = res.app.locals.user;
  console.log(login);
  const dbUser = await db.User.findOne({ where: { login }, raw: true });
  console.log(dbUser.id);
  const dbTotal = await db.Total.findAll({ where: { userId: dbUser.id }, raw: true });
  console.log(dbTotal);

  res.renderComponent(Profil, { title: 'Profil Page', dbTotal });
});

// router.get('/', async (req, res) => {
//   const arr = await Total.findAll({ raw: true })
//   res.renderComponent(Profil, {

//   })
//   }
module.exports = router;
