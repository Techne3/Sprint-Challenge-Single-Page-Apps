import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import {Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import CharacterCard from "./components/CharacterCard.js";
import LocationList from './components/LocationsList';



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path= "/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path ="/locations" component={LocationList} />
    </main>
  );
}
 