import React, {Component} from "react";
import '../style.scss'
//https://api.themoviedb.org/3/genre/movie/list?api_key=d30cdb2785a1ea876821bed6940d05a7&language=en-US


const MovieResults = (props) => {

  return (
    <div id="resultsStyles">
      <div>{props.title}</div>
      <div>{props.date}</div>
      <div>{props.overview}</div>
      <div>
        <span>reviews: {props.reviews} </span>
        <span>score: {props.score}</span>
      </div>
      <div>
        <button onClick={() => props.saveFavorite(props)}>save</button>
      </div>
    </div>
  )
}

export default MovieResults; 