import React, {Component, useEffect} from "react";
import FavoriteMovie from '../components/FavoriteMovie'

const FavoriteContainer = ({favoriteMovies, deleteFavorite}) => {
  const favMovies = favoriteMovies.map(movie => {
    return (
      <FavoriteMovie
      deleteFavorite ={deleteFavorite}
      id = {movie._id}
      key = {movie._id}
      title = {movie.title}
      date = {movie.date}
      overview = {movie.overview}
      score = {movie.score}
      poster = {movie.poster}
    />
    )
  })

  return (
    <>
      <div className="header">saved movies:</div>
      <div id="favContainer">
      {favMovies}
      </div>
      
    </>

  )
}

export default FavoriteContainer;