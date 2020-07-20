import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import { Row } from 'react-bootstrap'



class StateCharts extends Component {
    constructor(props) {
        super();
        this.state = {
            data: 0
        }
    }

    componentWillMount(){
      console.log("Props", this.props)
        var data = {
            labels: ['Confirmed', 'Active', 'Recovered', 'Deaths',],
            datasets: [
              {
                label: 'Confirmed',
                data: this.props.confirmed,
                borderColor: [
                  'rgba(255, 206, 86, 0.2)',
                ],
                backgroundColor: [
                  'rgba(255, 206, 86, 0.2)',
                ]
              },
              {
                label: 'Active',
                data: this.props.active,
                borderColor: [
                  'rgba(255, 206, 86, 0.2)',
                ],
                backgroundColor: [
                  'rgba(255, 206, 86, 0.2)',
                ]
              },{
                label: 'Recovered',
                data: this.props.recovered,
                borderColor: [
                  'rgba(255, 206, 86, 0.2)',
                ],
                backgroundColor: [
                  'rgba(255, 206, 86, 0.2)',
                ]
              },{
                label: 'Deaths',
                data: this.props.deaths,
                borderColor: [
                  'rgba(255, 206, 86, 0.2)',
                ],
                backgroundColor: [
                  'rgba(255, 206, 86, 0.2)',
                ]
              }
            ]
          }
        this.setState({
            data: data
        })
        console.log(data);
    }
    
    
    render() {
        return (
            <Row>
            <Bar data={this.state.data}
                options={{
                title:{
                display:true,
                text: this.props.state,
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
            />
                
                {/* <h1>{this.props.state}</h1>
                <h1>Confirmed:{this.props.confirmed}</h1>
                <h1>Deaths:{this.props.deaths}</h1>
                <h1>Active:{this.props.active}</h1>
                <h1>Recovered:{this.props.recovered}</h1> */}
            </Row>
        );
    }
}

export default StateCharts;

