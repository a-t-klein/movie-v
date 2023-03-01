import React, {Component, useState, useEffect} from "react";
import Search from "../components/Search";
import ReturnedMovies from "./ReturnedMovies";
import FavoriteContainer from './FavoritesContainer'
import '../style.scss'


const FindMoviesContainer = () => {

//use effects
  useEffect(() => {
    
  }, [favoriteMovies]);







  //state
const [searchVal, setSearchVal] = useState('');
const [movieData, setMovieData] = useState([]);
const [relatedMovies, setRelatedMovies] = useState('');
const [favoriteMovies, setFavoriteMovies ] = useState(['']);


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
    const sortedResults = response.results.sort((a, b) => b.vote_average -  a.vote_average);
    setMovieData(sortedResults);
    setRelatedMovies(searchVal)
    setSearchVal('');
  })
  .catch(err => console.error(err));
}

const saveFavorite = async (props)  => {
  const reqBody = {
    _id: props.id, 
    title: props.title, 
    date: props.date,
    overview: props.overview,
    score: props.score
    };

  try {
    const response = await fetch('/favorite', 
    {
      method: 'post',
      body: JSON.stringify(reqBody),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    console.log('post complete! responseBody:', response.body);
  } catch (err) {
    console.log(`err in MovieResults Post Request: ${err}`);
  }
}

const getFavorites = async (props)  => {
  try {
    const response = await fetch('/favorite', 
    {
      method: 'get',
      body: JSON.stringify(reqBody),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    console.log('post complete! responseBody:', response.body);
  } catch (err) {
    console.log(`err in MovieResults Post Request: ${err}`);
  }
}


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
      <ReturnedMovies movieData = {movieData} saveFavorite = {saveFavorite} />
      <FavoriteContainer />
    </>
  );
}



export default FindMoviesContainer;