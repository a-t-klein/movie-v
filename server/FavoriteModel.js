const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://savedMovies:${process.env.MONGO_PASSWORD}@savedmovies.rfm4k7f.mongodb.net/?retryWrites=true&w=majority`;

const Schema = mongoose.Schema;

const favoriteSchema = new Schema ({
  _id: Number,
  title: String,
  date: String,
  overview: String,
  score: Number,
  poster: String,
});

const Favorites = mongoose.model('favorites', favoriteSchema);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'favoriteMovies'
  })
  .then(() => console.log('connected to DB'))

module.exports = {Favorites};





