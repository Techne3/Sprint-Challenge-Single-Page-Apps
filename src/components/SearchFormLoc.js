import React,{useState,useEffect} from 'react'
import styled from 'styled-components';

const SearchBar = styled.input`
  margin:20px  40%;
  padding:10px 60px;
  border-radius: 20px;
  text-align:center;
    &:focus{
        outline:none;
    }
`

const SearchFormLocs =(props)=> {
//  console.log(props.locations)
const searchName= props.locations.map(location => location.name)

const [searchedLocation, setSearchedLocation] =useState([])
const [items, setItems] =useState([])

const handleChanges =(e)=>{
    // console.log(e.target.value)
    setSearchedLocation (e.target.value)
}

 useEffect(()=> {
    const result = searchName.filter(names =>{
        return names.toLowerCase().includes(searchedLocation)
    })
    setItems(result)


 },[searchedLocation])



    return(
        <div>
        <SearchBar
        type="searched"
        placeholder="search"
        onChange={handleChanges}
        value={searchedLocation}
        >
            </SearchBar>

        {items.map(i=>{
            return(
                <h1>{i}</h1>
            )
        })}
      
 
        </div> 
           
      
    )
}


export default SearchFormLocs 