import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard'
import SearchForm from './SearchForm'

export default function LocationsList() {

    const[locations, setLocations] = useState([])


useEffect(()=> {
    axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            // console.log(response.data.results)
            setLocations(response.data.results);

        })
        .catch( error => {
            console.log("error", error)
        })

    }, [])





return (

    <div>
    <h1>Locations</h1>
    {/* <SearchForm locations={locations} /> */}
        {locations.map(location =>  {
            return(
                <div>
                 <LocationCard  location={location}/> 
            </div>
            )
        })}
    </div>
)

}
