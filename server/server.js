const express = require('express');

const path = require('path');

const app = express();

app.use('/main-bundle', express.static(path.join(__dirname, '../public/main-bundle.js')));
app.get('/', express.static(path.join(__dirname, '../client')));
app.listen('8000', () => {
  console.log('listening to 8000');
});
