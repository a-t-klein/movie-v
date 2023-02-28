const express = require('express')
const app = express();
const port = 8080;

require('dotenv').config();

app.use('/cool', (req, res) => {
  res.status(200).send({test})
})



// const fetchMovieData = (movieName) => {
//   const testurl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`;
  
//   fetch(testurl)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// }


app.listen(port, () => console.log(`listening on port: ${port}`))
