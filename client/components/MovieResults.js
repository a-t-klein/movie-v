import React, {Component} from "react";
import '../style.scss'

const MovieResults = ({title, date, overview, score, reviews }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{overview}</div>
      <div>
        <span>reviews: {reviews} </span>
        <span>score: {score}</span>
      </div>
    </div>
  )
}

export default MovieResults; 