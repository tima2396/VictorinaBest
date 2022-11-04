const router = require('express').Router();
const db = require('../db/models');
const Profil = require('../views/Profil.jsx');

router.get('/', async (req, res) => {
  const user = res.app.locals.user.login;
  console.log(user);
  const dbUser = await db.User.findOne({ where: { login: user }, raw: true });
  console.log(dbUser.id);
  const dbTotal = await db.Total.findAll({ where: { userId: dbUser.id }, raw: true });
  console.log(dbTotal);
  const dbTheme = await db.Theme.findAll({ raw: true });
  console.log(dbTheme);
  const themeName = dbTheme.map((theme) => theme.name);
  console.log(themeName);

  // Theme 1
  const totalFrom1 = await db.Total.findAll({ where: { userId: dbUser.id, idTheme: '1' }, raw: true });
  console.log(totalFrom1);
  // Theme 2
  const totalFrom2 = await db.Total.findAll({ where: { userId: dbUser.id, idTheme: '2' }, raw: true });
  console.log(totalFrom2);
  // Theme 3
  const totalFrom3 = await db.Total.findAll({ where: { userId: dbUser.id, idTheme: '3' }, raw: true });
  console.log(totalFrom3);

  res.renderComponent(Profil, {
    title: 'Profil Page', user, dbTotal, dbUser, dbTheme, totalFrom1, totalFrom2, totalFrom3,
  });
});

// router.get('/', async (req, res) => {
//   const arr = await Total.findAll({ raw: true })
//   res.renderComponent(Profil, {

//   })
//   }
module.exports = router;
