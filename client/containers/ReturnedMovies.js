import MovieResults from "../components/MovieResults";
import React, {Component, useState} from "react";
import '../style.scss'


const ReturnedMovies = ({movieData, saveFavorite}) => {

  const returnedMovies = movieData.map(movie => {
    console.log(movie)
    return (
      <MovieResults
        saveFavorite = {saveFavorite} 
        key = {movie.id} 
        id = {movie.id}
        title = {movie.title}
        date = {movie.release_date}
        overview = {movie.overview}
        score = {movie.vote_average}
        reviews = {movie.vote_count}
        poster = {movie.poster_path}
        />)
  })

  return(
    <div id= "resultsContainer">
      {returnedMovies}
    </div>
  )
}


export default ReturnedMovies;