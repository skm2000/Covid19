import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Map, Circle, TileLayer, Popup } from 'react-leaflet';
// import {CodeGrid} from 'codegrid-js'

export default class Leaflet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { lat, lng } = e.latlng;
    // console.log(lat, lng)    
  }

  render() {
    const position = [24.8143, 10.226];
    const zoom = 2;
    return (
      <Map center={position}
        zoom={zoom}
        minZoom={2}
        maxZoom={10}
        onclick={this.handleChange}
      >
        <TileLayer
          url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          attribution={'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
        />
        {this.props.infectedOn &&
          <MyCircles data={this.props.infectedData} date={this.props.date} color="rgba(255, 99, 132, 1)" condition="Confirmed" colorName=""/>
        }
        {this.props.recoveredOn &&
          <MyCircles data={this.props.recoveredData} date={this.props.date} color="rgba(75, 192, 192, 1)" condition="Recovered" colorName=""/>
        }
        {this.props.deathOn &&
          <MyCircles data={this.props.deathData} date={this.props.date} color="#616161" condition="Deceased"/>
        }
      </Map>)
  }
}

const MyCircles = (props) => {
  // console.log(props.data);
  return (
    props.data.map((row, i) => {
      if (row[props.date] <= 0) {
        // No cases on this date
        return;
      }
      if (row["Lat"] != null && row["Long"] != null) {
        return (
          <Circle
            key={i}
            center={[row["Lat"], row["Long"]]}
            radius={1000 * Math.sqrt(row[props.date])}
            fillOpacity={0.8}
            fillColor={props.color}
            stroke={false}
          >
          <Popup>
            
             <h5 style={{color:`${props.color}`}}>{props.data[i]['Country/Region']}</h5>
             <h6 style={{color:`${props.color}`}}>{props.condition} : {row[props.date]}</h6>
    
              
              {/* {console.log("ff",props.data[i]['Country/Region'])} */}
          </Popup>
          </Circle>
          )
        }
      }
    )
  );
}

// onMouseOut={(e) => e.target.setStyle({fillColor: 'blue'})}
// onMouseOver={(e) => e.target.setStyle({fillColor: 'green'})}