import React, {Component} from "react";
import '../style.scss'
//https://api.themoviedb.org/3/genre/movie/list?api_key=d30cdb2785a1ea876821bed6940d05a7&language=en-US


const MovieResults = (props) => {
  const posterSrc = `https://image.tmdb.org/t/p/w500/${props.poster}`
  console.log('in Movie Result', props.poster)

  return (
    <div id="resultsStyles">
      <div id = 'resultContent'>
        <img src={posterSrc}></img>
        <button onClick={() => props.saveFavorite(props)}>save</button>
      </div>
      <div>
      <div>{props.title}</div>
      <div>{props.date}</div>
      <div>{props.overview}</div>
      <div>
        <span>reviews: {props.reviews} </span>
        <span>score: {props.score}</span>
      </div>
      </div>

    </div>
  )
}


// return(
//   <div id="favoritesStyles">
//     <div className="favContent">
//       <img className = "favPoster" src = {posterSrc} ></img>
//       <button onClick={()=> deleteFavorite(id)}>delete</button>
//     </div>

//     <div className="favTxt">
//       <div>{title}</div>
//       <div>{date}</div>
//       <div>{overview}</div>
//       <div>score: {score}</div>
//     </div>
//   </div>
// )


export default MovieResults; 