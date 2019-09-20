import React, { useState } from "react";

export default function SearchForm(props) {
 
  const searchNames = props.characters.map(character => character.name);
  const [searchItem, setSearchItem] = useState( '');
  const [searchResults, setSearchResults] =useState([])




  return (
    <section className="search-form">
     // Add a search form here
    </section>
  );
}
