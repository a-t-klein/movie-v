const express = require('express')
const path = require('path');
require('dotenv').config();

const app = express();
const port = 8080;

// app.use(express.json());


app.get('/cool', (req, res) => {
  res.status(200).send('this is working')
})


app.use('*', (req, res) => {
  res.status(404).send('cannot find page!')
});
module.exports = app.listen(port, () => console.log(`listening on port: ${port}`))
  