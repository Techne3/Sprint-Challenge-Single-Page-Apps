import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [characters, setCharacters] = useState([ ])
const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get(`https://rickandmortyapi.com/api/character/`)
         .then(response => {
           setCharacters(response.data.results);
          //  console.log(response.data.results)
         })
         .catch(error =>{
           console.log("error", error)
         })
  }, []);

  return (
    <section className="character-list">
      <SearchForm characters={characters} />
      {characters.map(character => {
        return(
          <CharacterCard  character={character}/>
          // <div>
          // <h1>{character.name}</h1>
          // <h2>{character.species}</h2>
          // </div>
        )
      })

      }
    </section>
  );
}
