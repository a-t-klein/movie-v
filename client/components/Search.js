import React, {Component} from "react";
import '../style.scss'

const Search = ({fetchMovieData, onInput, searchVal}) => {  
  return (
    <div id="search">
      <input type="text" name="name" onChange={onInput} placeholder ='search a movie'/>
      <button onClick={() => fetchMovieData(searchVal)}>submit</button>
    </div>
  )
}



export default Search;