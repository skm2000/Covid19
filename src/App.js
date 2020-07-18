import React from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import AllCases from './components/Cases/AllCases';
import CountryPicker from './components/CountryTable/CountryPicker';
import CountryCases from './components/CountryTable/CountryCases';
import CountryTable from './components/CountryTable/CountryTable';
import { fetchCountryData,fetchCountryStateData } from './components/api/index';


class App extends React.Component {

  state = { //constructor invoked on its own
      data:{},
      country: '',
      stateCountry:{}
  }

  async componentWillMount(){
      const fetchedCountry = await fetchCountryData();
      const fetchStateData = await fetchCountryStateData();
      console.log(fetchStateData)

      this.setState({ data: fetchedCountry});
      this.setState({ stateCountry: fetchStateData});
  }

    handleCountryChange = async (country) => {
      const fetchCountry = await fetchCountryData(country);
      const fetchStateData = await fetchCountryStateData(country);
      console.log(fetchStateData);
      this.setState({ data: fetchCountry, country:country, stateCountry:fetchStateData });
  }

  render(){
      return (
          <div className="container-fluid">
              <Heading/>
              <AllCases/>
              <CountryPicker handleCountryChange={this.handleCountryChange}/>
              <CountryCases data={this.state.data}/>
              <CountryTable stateCountry={this.state.stateCountry} country={this.state.country}/>
          </div>
      )
  }
}

export default App;