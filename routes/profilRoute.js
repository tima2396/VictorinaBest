const router = require('express').Router();
const Total = require('../db/models/total.js');
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

router.get('/', (req, res) => {
  res.renderComponent(Profil, { title: 'Profil Page', arr });
});

// router.get('/', async (req, res) => {
//   const arr = await Total.findAll({ raw: true })
//   res.renderComponent(Profil, {

//   })
//   }
module.exports = router;