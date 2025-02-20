import React from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import AllCases from './components/Cases/AllCases';
import CountryPicker from './components/CountryTable/CountryPicker';
import CountryCases from './components/CountryTable/CountryCases';
import CountryTable from './components/CountryTable/CountryTable';
import  CountryCumulative  from './components/charts/CountryCumulative'
import { fetchCountryData,fetchCountryStateData } from './components/api/index';
import Leaflet from "./components/Visualizer/Map.js";
import DateSlider from "./components/Visualizer/DateSlider.js";
import DataSelector from "./components/Visualizer/DataSelector.js";
import {Row,Col} from 'react-bootstrap';
import Papa from "papaparse";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import NewsCountry from './components/Cases/NewsCountry';


const infectedUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";
const recoveredUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv";
const deathUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { //constructor invoked on its own
            data: {},
            country: undefined,
            stateCountry: {},
            infectedData: [],
            deathData: [],
            recoveredData: [],
            date: "1/22/20",
            infectedOn: true,
            deathOn: false,
            recoveredOn: false,
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.toggleInfectedData = this.toggleInfectedData.bind(this);
        this.toggleRecoveredData = this.toggleRecoveredData.bind(this);
        this.toggleDeathData = this.toggleDeathData.bind(this);
    }
    componentDidMount() {
        const parsedInfectedData = App.pullAndParseUrl(infectedUrl);
        const parsedRecoveredData = App.pullAndParseUrl(recoveredUrl);
        const parsedDeathData = App.pullAndParseUrl(deathUrl);

    
        parsedInfectedData.then(result => {
          this.setState({ infectedData: result.data });
        });
    
        parsedRecoveredData.then(result => {
          this.setState({ recoveredData: result.data });
        });
    
        parsedDeathData.then(result => {
          this.setState({ deathData: result.data });
        });
      }
    
      static pullAndParseUrl(url) {
        return axios.get(url).then(response => Papa.parse(response.data, { header: true }));
      }
    
    
      handleDateChange(selectedDate) {
        this.setState({ "date": selectedDate });
      };
    
      toggleInfectedData() {
        this.setState({infectedOn: !this.state.infectedOn});
      }
    
      toggleRecoveredData() {
        this.setState({recoveredOn: !this.state.recoveredOn});
      }
    
      toggleDeathData() {
        this.setState({deathOn: !this.state.deathOn});
      }
    async componentWillMount(){
        const fetchedCountry = await fetchCountryData();
        const fetchStateData = await fetchCountryStateData();
        // console.log(fetchStateData);

        this.setState({ data: fetchedCountry});
        this.setState({ stateCountry: fetchStateData});
    }

    handleCountryChange = async (country) => {
      const fetchCountry = await fetchCountryData(country);
      const fetchStateData = await fetchCountryStateData(country);
      // console.log(fetchStateData);
      this.setState({ data: fetchCountry, country:country, stateCountry:fetchStateData });
    }

  render(){
      return (
          <>
            <div className="container-fluid px-md-5 py-md-0">
                <Heading/>
                <AllCases/>
              <Grid container justify="center"   alignItems="center" spacing={3} >
                <Grid item xs={10}>
                    <Leaflet
                    infectedData={this.state.infectedData}
                    infectedOn={this.state.infectedOn}
                    recoveredData={this.state.recoveredData}
                    recoveredOn={this.state.recoveredOn}
                    deathData={this.state.deathData}
                    deathOn={this.state.deathOn}
                    date={this.state.date}
                    />
                </Grid>
                <Grid container justify="center"   alignItems="center" >
                    <DataSelector 
                    toggleInfectedData={this.toggleInfectedData}
                    infectedOn={this.state.infectedOn}
                    toggleRecoveredData={this.toggleRecoveredData}
                    recoveredOn={this.state.recoveredOn}
                    toggleDeathData={this.toggleDeathData}
                    deathOn={this.state.deathOn}
                    />
                </Grid>
                {/* <Grid item xs={8} container justify="center"   alignItems="center">
                
                </Grid> */}
                <Grid item xs={8} container justify="center" >
                  <h5>Date:  {this.state.date}</h5>
                  <DateSlider
                    handleDateChange={this.handleDateChange}
                  />
                  
                    
                </Grid>
                  </Grid>
                  </div>
              
              <div className="container-fluid px-md-5">
              <CountryPicker handleCountryChange={this.handleCountryChange}/>
              <CountryCases country={this.state.country} data={this.state.data} />
                {this.state.country !== undefined ? <CountryCumulative country={this.state.country}/> : null}
                {this.state.country !== undefined ? <CountryTable country={this.state.country} data={this.state.data}/> : null}
                {/* {this.state.country !== undefined ? <NewsCountry country={this.state.country}/> : null } */}
            </div>
            <footer id="sticky-footer" className="py-3 mt-4 bg-dark text-white-50">
              <Row>
                <Col className="container text-left pl-3">
                  <small><a target="_blank" style={{color: '#f5f5f5'}}href="https://www.linkedin.com/in/jiteshalbus/">Jitesh Chowdhury</a></small><small>&nbsp;&nbsp;<a target="_blank" style={{color: '#f5f5f5'}}href="https://www.linkedin.com/in/utkarsh-kumar-522b48118/">Utkarsh Kumar</a></small><br/>
                  <small><a target="_blank" style={{color: '#f5f5f5'}}href="https://www.linkedin.com/in/pratik-dey-74b7bb173/">Pratik Dey</a>&nbsp;&nbsp;</small><small><a target="_blank" style={{color: '#f5f5f5'}}href="https://www.linkedin.com/in/shubham-kumar-948409185/">Shubham Kumar</a></small>
                </Col>
                <Col className="container d-flex justify-content-end mt-3 pr-3">
                <small><a target="_blank" style={{color: '#f5f5f5'}}href="https://drive.google.com/file/d/1A3XpzFUGEMRJE7u2DJGf8CSHwsASmLjn/view">Project Documentation</a></small>
                </Col>
              </Row>
            </footer>
         </>
      )
  }
}

export default App;