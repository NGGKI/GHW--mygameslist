import React, { useState } from 'react';
import Results from './Results';

let rawgKey = '073f79e50bcb4ca187b5bdf70d87e86a'

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (input) => {
    setSearchTerm(input.target.value)
  }

  const onSubmit = (input) => {
    input.preventDefault()
    let game = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
		    'X-RapidAPI-Key': '0940aa0e08msh4e2680b65886283p11bd47jsn7caf496cf832'
	    }
    };

  fetch('https://rawg-video-games-database.p.rapidapi.com/games?key=<rawgKey>', options)
	  .then(response => response.json())
	  .then(response => console.log(response))
	  .catch(err => console.error(err));
    setSearchTerm("")
  }

  return (
    <div className="game-search">
      <h1>Game Search</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <br></br>
        <input type="submit" />
      </form>
      <Results gameResults={gameResults} />
    </div>
  );
}

export default Search;



