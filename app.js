require('@babel/register');

const express = require('express');
const ssr = require('./middleware/ssr');

const app = express();
const PORT = 3000;
const mainRoute = require('./routes/mainRoute');

const regRoute = require('./routes/regRoute');
const logRoute = require('./routes/logRoute');
const logoutRouter = require('./routes/logout');
const profilRouter = require('./routes/profilRoute');
const qestRoute = require('./routes/qiestRoute');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(ssr);
app.use('/', mainRoute);
app.use('/reg', regRoute);
app.use('/log', logRoute);
app.use('/quest', qestRoute);
app.use('/logout', logoutRouter);
app.use('/profil', profilRouter);

app.listen(PORT, () => {
  console.log('Server is working');
});
