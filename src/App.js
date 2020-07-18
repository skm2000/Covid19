import React from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import AllCases from './components/Cases/AllCases';
import CountryPicker from './components/CountryTable/CountryPicker';
import CountryCases from './components/CountryTable/CountryCases';
import CountryTable from './components/CountryTable/CountryTable';
import { fetchCountryData } from './components/api/index';


class App extends React.Component {

  state = { //constructor invoked on its own
      data:{},
      country: undefined,
  }

  async componentWillMount(){
      const fetchedCountry = await fetchCountryData();

      this.setState({ data: fetchedCountry});
  }

    handleCountryChange = async (country) => {
      console.log(country)
      const fetchCountry = await fetchCountryData(country);
      this.setState({ data: fetchCountry, country:country})
  }

  render(){
      const { data,country } = this.state
      return (
          <div className="container-fluid">
              <Heading/>
              <AllCases/>
              <CountryPicker handleCountryChange={this.handleCountryChange}/>
              <CountryCases data={data}/>
              {this.state.country != undefined ? <CountryTable data={data}/> : null}
          </div>
      )
  }
}

export default App;