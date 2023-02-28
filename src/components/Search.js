import React, {Component, useState} from "react";

const Search = () => {
  //setting inital state of search box
  const [searchVal, setSearchVal] = useState('');

  const onInput = (e) => {
    setSearchVal(e.target.value)
  }

  const searchClick = () => {

  }


  return (
    <form>
      <input type="text" name="name" onChange={onInput} placeholder ='filmName'/>
      <button onClick={searchClick}>submit</button>
    </form>
  )
}

export default Search;