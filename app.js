require('@babel/register');

const express = require('express');
const ssr = require('./middleware/ssr');

const app = express();
const PORT = 3000;
const mainRoute = require('./routes/mainRoute');
const regRoute = require('./routes/regRoute');
const logRoute= require('./routes/logRoute');

app.use(express.static('public'));

app.use(ssr);
app.use('/', mainRoute);
app.use('/reg', regRoute);
app.use('/log', logRoute);
app.listen(PORT, () => {
  console.log('Server is working');
});
