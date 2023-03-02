import React, {Component} from "react";
import '../style.scss'

//

const FavoriteMovie = ({title, date, overview, score, id, deleteFavorite, poster}) => {
  const posterSrc = `https://image.tmdb.org/t/p/w500/${poster}`
  return(
    <div id="favoritesStyles">
      <div className="favContent">
        <img className = "favPoster" src = {posterSrc} ></img>
        <button onClick={()=> deleteFavorite(id)}>delete</button>
      </div>

      <div className="favTxt">
        <div>{title}</div>
        <div>{date}</div>
        <div>{overview}</div>
        <div>score: {score}</div>
      </div>
    </div>
  )
}

export default FavoriteMovie



// const MovieResults = (props) => {
//   return (
//     <div id="resultsStyles">
//       <div>{props.title}</div>
//       <div>{props.date}</div>
//       <div>{props.overview}</div>
//       <div>
//         <span>reviews: {props.reviews} </span>
//         <span>score: {props.score}</span>
//       </div>
//       <div>
//         <button onClick={() => props.saveFavorite(props)}>save</button>
//       </div>
//     </div>
// //   )
// // }

// export default MovieResults; 



// const ReturnedMovies = ({movieData, saveFavorite}) => {

//   const returnedMovies = movieData.map(movie => {
//     return (
//       <MovieResults
//         saveFavorite = {saveFavorite} 
//         key = {movie.id} 
//         id = {movie.id}
//         title = {movie.title}
//         date = {movie.release_date}
//         overview = {movie.overview}
//         score = {movie.vote_average}
//         reviews = {movie.vote_count}
//         />)
//   })

//   return(
//     <div id= "resultsContainer">
//     {returnedMovies}
//     </div>
//   )
// }


// export default ReturnedMovies;