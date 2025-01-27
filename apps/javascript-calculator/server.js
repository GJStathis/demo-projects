require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('', (req, res) => {
  res.sendFile(`${process.cwd()}/index.html`);
});

const portNum = process.env.PORT || 3000;

app.listen(portNum, () => {
  console.log(`Listening on port ${portNum}`);
});
