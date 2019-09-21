import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard'
import SearchFormLocs from './SearchFormLoc'
import {Link} from 'react-router-dom';


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
        <Link to ="/">Home</Link>
    <h1>Locations</h1>
   
    <SearchFormLocs locations={locations}  className=""/> 
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
