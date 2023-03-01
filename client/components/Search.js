import React, {Component, useState} from "react";

const Search = ({fetchMovieData, onInput, searchVal}) => {
  console.log('sarchVal', searchVal);
  
  return (
    <div>
      <input type="text" name="name" onChange={onInput} placeholder ='filmName'/>
      <button onClick={() => fetchMovieData(searchVal)}>submit</button>
    </div>
  )
}



export default Search;