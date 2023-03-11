import MovieResults from "../components/MovieResults";
import React, {Component, useEffect, useState} from "react";
import '../style.scss'


const ReturnedMovies = ({movieData, saveFavorite, searchVal}) => {
  useEffect(()=>{console.log('testtesttest')},[searchVal])

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