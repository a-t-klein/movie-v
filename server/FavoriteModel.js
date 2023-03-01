const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://savedMovies:${process.env.MONGO_PASSWORD}@savedmovies.rfm4k7f.mongodb.net/?retryWrites=true&w=majority`;

const favoriteSchema = {
  _id: String,
  title: String,
  date: Number,
  overview: String,
  score: Number
}
const Favorite = mongoose.model('favorite', favoriteSchema);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'favoriteMovies'
  })
  .then(() => console.log('connected to DB'))

module.exports = Favorite;






