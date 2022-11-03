require('@babel/register');

const express = require('express');
const ssr = require('./middleware/ssr');

const app = express();
const PORT = 3000;
const mainRoute = require('./routes/mainRoute');
const profilRouter = require('./routes/profilRoute');

app.use(express.static('public'));

app.use(ssr);
app.use('/', mainRoute);
app.use('/profil', profilRouter);
app.listen(PORT, () => {
  console.log('Server is working');
});
