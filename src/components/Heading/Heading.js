import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Button } from 'react-bootstrap';

const Heading = () => {
    return (
        <div className="row">
          <div className="col-sm-6 col-md-8 d-flex justify-content-start">
            <h2><b>COVID19 GLOBAL</b></h2>
          </div>
          <div className="col-sm-6 col-md-4 justify-content-end d-flex">
             <ReactStars count={5} size={34} activeColor="black"/>
             <Button variant="outline-dark" size="sm">Submit</Button>
          </div>
        </div>
    )
}

export default Heading;