// const url = 'https://api.themoviedb.org/3/movie/550?api_key=d30cdb2785a1ea876821bed6940d05a7;'
import * as dotenv from 'dotenv'
const url = `https://api.themoviedb.org/3/movie/550?api_key=${dotenv.apiKey}`

  fetch(url)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));