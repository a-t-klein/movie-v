import React, {Component, useEffect, useState} from "react";
import '../style.scss'


const Ticker = () => {
  const [popular, setPopular] = useState([]); 

  const fetchPopular = (movieName) => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=d30cdb2785a1ea876821bed6940d05a7&language=en-US&page=1'
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setPopular(response.results)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchPopular();
  },[])

  const popularMovies = popular.map(movie => <li>{movie.title}</li>);

  return(
    <>
    <div id = 'movieTicker'>
      <div id = 'title'>
        today's top movies
      </div>
      <ul>
        {popularMovies}
      </ul>
    </div> 
    </>
    
  )
}

export default Ticker; 