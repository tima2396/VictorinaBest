const logoutRouter = require('express').Router();

logoutRouter.get('/', (req, res) => {
  res.app.locals.user = undefined;
  console.log(res.app.locals.user);
  res.redirect('/');
});

module.exports = logoutRouter;
