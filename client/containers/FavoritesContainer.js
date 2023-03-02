import React, {Component, useEffect} from "react";
import FavoriteMovie from '../components/FavoriteMovie'

const FavoriteContainer = ({favoriteMovies, deleteFavorite}) => {

  console.log('in favContainer')
  const favMovies = favoriteMovies.map(movie => {
    console.log('eachMovie', movie.title)
    return (
      <FavoriteMovie
      deleteFavorite ={deleteFavorite}
      id = {movie._id}
      key = {movie._id}
      title = {movie.title}
      date = {movie.date}
      overview = {movie.overview}
      score = {movie.score}
    />
    )
  })

  useEffect(() => {
    console.log('inside favContainer',favMovies)
    
  })

  console.log('favMovies in FavoriteContainer',favoriteMovies)

  return (
    <>
      <div>saved movies:</div>
      {favMovies}
    </>

  )
}

export default FavoriteContainer;