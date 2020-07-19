import React, {  useEffect, useState } from 'react';
import { fetchCountrie } from '../api/index';
import WorldMap from './WorldMap';
import { Row, Container } from 'react-bootstrap';



const MyMaps = () => {
  const [countriesList, setData] = useState();
  const [loadingState, setloadingState] = useState(false);
  const fetchAPI = async() => {
    setData(await fetchCountrie());
    setloadingState(true); 
}
useEffect(() => {
    fetchAPI();
  },[]);

  const mapData = {};
  let markerSize = []; let markerSizeObj = {};
  let countryMarker = [];
  let countryToolTip = [];

  if(loadingState){
    if(countriesList.length > 0){
    countriesList.map((country) => {
       countryMarker.push({latLng:[country.countryInfo.lat, country.countryInfo.long], name: country.country })
    });
    
       countriesList.map((c) => {
       mapData[c.countryInfo.iso2] = c.cases;
       markerSizeObj[c.countryInfo.iso2] = c.todayCases;
       countryToolTip[c.country] = {Active: c.cases, Deaths: c.deaths}
       markerSize.push(c.todayCases);
     });
    }
  }

  

  return(
      <Container className="mb-4">
        <Row>
            <WorldMap/>
        </Row>
      </Container>
    
  );
}

export default MyMaps;
