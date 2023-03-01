const express = require('express')
const path = require('path');
const app = express();
const port = 8080;
const favoriteController = require('./FavoritesController')
require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/favorite', (req, res) => {
  res.status(200).send('addedCharacter!!!!')
});

app.get('/cool', (req, res) => {
  res.status(200).send('this is working')
})


app.use('*', (req, res) => {
  res.status(404).send('cannot find page!')
});
module.exports = app.listen(port, () => console.log(`listening on port: ${port}`))
  