require('@babel/register');

const express = require('express');
const ssr = require('./middleware/ssr');

const app = express();
const PORT = 3000;
const mainRoute = require('./routes/mainRoute');

app.use(express.static('public'));

app.use(ssr);
app.use('/', mainRoute);
app.listen(PORT, () => {
  console.log('Server is working');
});
