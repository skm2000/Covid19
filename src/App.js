import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Heading from './components/Heading/Heading';
import AllCases from './components/Cases/AllCases';

const App = () => {
  return(
    <>
     <div className="container-fluid">
     <Heading/>
     <AllCases/>
     </div>
    </>
  )
}

export default App;