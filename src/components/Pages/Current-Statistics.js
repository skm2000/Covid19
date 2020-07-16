import React, { Component } from 'react';
import '../static/css/styles.css'

export default class CurrentStatistics extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">Active</div>
                <div className="col">Recovered</div>
                <div className="col">Deceased</div>
                <div className="col">Confirmed</div>
            </div>
        );
    }
}
