import React, {Component} from "react";
import FindMoviesContainer from "../containers/FindMovies";
import Ticker from "./Ticker"
import Askii from "./Askii";
const App = () => {
  return (
    <div>
      <Ticker />
      <div id = 'main'>
        movie-z
        </div>
      <Askii />
      <FindMoviesContainer />
    </div>
  )
}

export default App;