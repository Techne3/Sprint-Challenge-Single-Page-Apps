import React, { useState,useEffect } from "react";

export default function SearchForm(props) {
  // console.log(props.characters)
 
  const searchNames = props.characters.map(character => character.name);
  

  const [searchItem, setSearchItem] = useState('');
  const [searched, setSearched] =useState([])

 

  useEffect(() => {
    const results = searchNames.filter(name => {
      return name.toLowerCase().includes(searchItem);
    })
      setSearched(results);
  }, [searchItem])


  const handleChange = (e) => {
    setSearchItem(e.target.value);
  }
 

  return (
    <section className="search-form">
      <div className="searchWrap">
      <input
      className="searchBar"
       type="search"
       placeholder="search"
       value={searchItem}
       onChange={handleChange}
       />
       </div>
       {/* <input onClick={callSearchFunction} type="submit" value="searchItem" /> */}
       {searched.map(items => {
        return (
          <div>
            <h2 className="results">{items}</h2>
          </div>
        )
      })}

    </section>
  );
}
