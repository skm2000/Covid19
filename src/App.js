import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Heading from './components/Heading/Heading';
import AllCases from './components/Cases/AllCases';
import WorldMap from './components/Maps/WorldMap'
import CountryPicker from './components/CountryTable/CountryPicker';
import CountryCases from './components/CountryTable/CountryCases';
import CountryTable from './components/CountryTable/CountryTable';
import MyMaps from './components/Maps/MyMaps';

const App = () => {
  return(
    <>
     <div className="container-fluid">
          <Heading/>
          <AllCases/>
          <CountryPicker/>
          <MyMaps/>
          <CountryCases/>
          <CountryTable/>
     </div>
    </>
  )
}

export default App;