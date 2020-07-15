import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap"

export default class Landing extends Component {
    render() {
        return (
            <div class="container">
                <div className="row row1">
                    <div className="col-md-5  ">
                       <b>Covid19</b> 
                    </div>
                    <div className="col-md-5">
                        <b>Rate Us</b>
                    </div>
                </div>
            </div>
        );
    }
}
