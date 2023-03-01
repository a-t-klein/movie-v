import React, {Component} from "react";
import '../style.scss'

const MovieResults = ({title, date, overview, score, reviews }) => {
  return (
    <div id="resultsStyles">
      <div>{title}</div>
      <div>{date}</div>
      <div>{overview}</div>
      <div>
        <span>reviews: {reviews} </span>
        <span>score: {score}</span>
      </div>
      <div>
        <button>save</button>
      </div>
    </div>
  )
}

export default MovieResults; 