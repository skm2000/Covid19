import React from "react";
import { withStyles } from '@material-ui/core/styles';

<<<<<<< HEAD
import { Map, Circle, TileLayer, Popup } from 'react-leaflet';

=======
import { Map, Circle, TileLayer } from 'react-leaflet';
// import {CodeGrid} from 'codegrid-js'
>>>>>>> 46695f607e858280c86657ec229ccb74222555e0

export default class Leaflet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { lat, lng } = e.latlng;
    console.log(lat, lng)    
  }

  render() {
<<<<<<< HEAD
    const position = [20, 10];
    const zoom = 3;
=======
    const position = [-8.8143, 13.226];
    const zoom = 2;
>>>>>>> 46695f607e858280c86657ec229ccb74222555e0
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
          <MyCircles data={this.props.infectedData} date={this.props.date} color="rgba(255, 99, 132, 1)"/>
        }
        {this.props.recoveredOn &&
          <MyCircles data={this.props.recoveredData} date={this.props.date} color="rgba(75, 192, 192, 1)"/>
        }
        {this.props.deathOn &&
          <MyCircles data={this.props.deathData} date={this.props.date} color="black"/>
        }
      </Map>)
  }
}

const MyCircles = (props) => {
  console.log(props.data);
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
          <Popup onMouseOver={(e) => e.target.setStyle({fillColor: 'green'})}>
              <h4>{row[props.date]}</h4>
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