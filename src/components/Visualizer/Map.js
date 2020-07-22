import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Map, Circle, TileLayer, Popup } from 'react-leaflet';


export default class Leaflet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const position = [20, 10];
    const zoom = 3;
    return (
      <Map center={position} zoom={zoom}>
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