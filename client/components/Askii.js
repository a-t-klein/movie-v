import React, {Component} from "react";

const Askii = () => {
  // const row1 = String.raw`___  ___   ___   __ __ __  ____  ____`
  // const row2 = String.raw`||\\//||  // \\  || || || ||       //`
  // const row3 = String.raw`|| \/ || ((   )) \\ // || ||==    // `
  // const row4 = String.raw`||    ||  \\_//   \V/  || ||___  //__`
    const row1 = String.raw`                          _                   `
    const row2 = String.raw` _ __ ___    ___  __   __(_)  ___         ____`
    const row3 = String.raw`| '_ \  _ \ / _ \ \ \ / /| | / _ \ _____ |_  /`
    const row4 = String.raw`| | | | | || (_) | \ V / | ||  __/|_____| / / `
    const row5 = String.raw`|_| |_| |_| \___/   \_/  |_| \___|       /___|`

  return(
    <pre>
      <div>{row1}</div>
      <div>{row2}</div>
      <div>{row3}</div>
      <div>{row4}</div>
      <div>{row5}</div>
    </pre>

  )
}

export default Askii; 