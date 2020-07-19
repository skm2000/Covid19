import React from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import AllCases from './components/Cases/AllCases';
import CountryPicker from './components/CountryTable/CountryPicker';
import CountryCases from './components/CountryTable/CountryCases';
import CountryTable from './components/CountryTable/CountryTable';
import { fetchCountryData,fetchCountryStateData } from './components/api/index';
import MyMaps from './components/Maps/MyMaps';
import WorldCharts from './components/charts/WorldCharts';


class App extends React.Component {

  state = { //constructor invoked on its own
      data:{},
      country: undefined,
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
              {/* <MyMaps/> */}
              <CountryPicker handleCountryChange={this.handleCountryChange}/>
              <CountryCases data={this.state.data}/>
              {this.state.country != undefined ? <CountryTable data={this.state.data}/> : null}
          </div>
      )
  }
}

export default App;