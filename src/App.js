import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Landing from './components/pages/Landing'
import './App.css';

const App = () => {
  return(
    <>
      <Landing/>
    </>
  )
}

export default App;