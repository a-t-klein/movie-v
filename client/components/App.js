import React, {Component} from "react";
import FindMoviesContainer from "../containers/FindMovies";
import Ticker from "./Ticker"
const App = () => {
  return (
    <div>
      <Ticker />
      <p id = 'main'>movie-z</p>
      <FindMoviesContainer />
    </div>
  )
}

export default App;