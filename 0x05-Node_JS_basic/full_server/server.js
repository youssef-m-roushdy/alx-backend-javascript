// app.js
const express = require('express');
const router = require('./routes');

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
