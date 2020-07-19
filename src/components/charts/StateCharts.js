import React, { Component } from 'react';

class StateCharts extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.state}</h1>
                <h1>Confirmed:{this.props.confirmed}</h1>
                <h1>Deaths:{this.props.deaths}</h1>
                <h1>Active:{this.props.active}</h1>
                <h1>Recovered:{this.props.recovered}</h1>
            </div>
        );
    }
}

export default StateCharts;