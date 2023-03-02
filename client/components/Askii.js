
import React, {Component} from "react";

const Askii = () => {
  const row1 = '___  ___   ___   __ __ __  ____  ____'
  const row2 = '||\\//||  // \\  || || || ||       //'
  const row3 = '|| \/ || ((   )) \\ // || ||==    // '
  const row4 = '||    ||  \\_//   \V/  || ||___  //__'

  return(
    <div>
      <div>{row1}</div>
      <div>{row2}</div>
      <div>{row3}</div>
      <div>{row4}</div>
    </div>

  )
}

export default Askii; 