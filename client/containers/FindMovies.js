import React, {Component, useState} from "react";
import Search from "../components/Search";
import MovieResults from "../components/MovieResults";
import '../style.scss'


const FindMoviesContainer = () => {
  //state
const [searchVal, setSearchVal] = useState('');
const [movieData, setMovieData] = useState([]);
const [relatedMovies, setRelatedMovies] = useState('');

//inputs
const onInput = (e) => {
  setSearchVal(e.target.value)
}

const fetchMovieData = (movieName) => {
  // const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=d30cdb2785a1ea876821bed6940d05a7&language=en-US&query=${movieName}&page=1&include_adult=false`;
  fetch(url)
  .then(response => response.json())
  .then(response => {
    console.log(response.results);
    setMovieData(response.results);
    setRelatedMovies(searchVal)
    setSearchVal('');

  })
  .catch(err => console.error(err));
}




  const returnedMovies = movieData.map(movie => {
    return (
      <MovieResults  className="resultsStyles"
        key = {movie.id} 
        title = {movie.title}
        date = {movie.release_date}
        overview = {movie.overview}
        score = {movie.vote_average}
        reviews = {movie.vote_count}
        />)
  })


  return(
    <>
      <Search 
        fetchMovieData = {fetchMovieData}
        onInput = {onInput}
        searchVal = {searchVal}
      />
      <div>
        Movies Related to: {relatedMovies}
      </div>
      <div id="resultsContainer">
        {returnedMovies}
      </div>
    </>
  );
}



export default FindMoviesContainer;