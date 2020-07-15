import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap"

export default class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                       <b>Covid19</b> 
                    </div>
                    <div className="col">
                        <b>Rate Us</b>
                    </div>
                </div>
            </div>
        );
    }
}
