import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Heading from './components/Heading/Heading';

const App = () => {
  return(
    <>
     <div className="container-fluid">
     <Heading/>
     </div>
    </>
  )
}

export default App;