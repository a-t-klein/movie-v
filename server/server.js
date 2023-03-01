const express = require('express')
const path = require('path');
const app = express();
const port = 8080;
const favoriteController = require('./FavoritesController')
require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/favorite', favoriteController.addFavorite, (req, res) => {
  res.status(200).send('yo it worked!')
});

app.get('/favorite',favoriteController.getFavorite, (req, res) => {
  res.status(200).send(res.locals.favorite)
});



app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
module.exports = app.listen(port, () => console.log(`listening on port: ${port}`))
  