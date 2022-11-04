const router = require('express').Router();
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

module.exports = router;