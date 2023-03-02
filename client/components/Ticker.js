import React, {Component, useEffect, useState} from "react";
import '../style.scss'


const Ticker = () => {
  const [popular, setPopular] = useState([]); 

  const fetchPopular = (movieName) => {
    console.log('in fetCHH')
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=d30cdb2785a1ea876821bed6940d05a7&language=en-US&page=1'
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log('res:',response.results)
        setPopular(response.results)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    console.log('in Ticker')
    fetchPopular();
  },[])

  const popMovies = popular.map(movie => movie.title);

  console.log('popMovies', popMovies)

  return(
    <div>
      {popMovies}
    </div>
  )
}

export default Ticker; 