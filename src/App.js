import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Heading from './components/Heading/Heading';
import AllCases from './components/Cases/AllCases';
import WorldMap from './components/Maps/WorldMap'

const App = () => {
  return(
    <>
     <div className="container-fluid">
          <Heading/>
          <AllCases/>
          <WorldMap/>
     </div>
    </>
  )
}

export default App;