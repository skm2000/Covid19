import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Button,Container,Row,Col } from 'react-bootstrap';

const Heading = () => {
    return (
        <div>
            <Row>
              <Col xs={6}><h2><b>COVID19 GLOBAL</b></h2>
              </Col>
              <Col xs={6} className="d-md-flex justify-content-end">
              <ReactStars count={5} size={32} activeColor="red"/>
                  <Button className="mx-md-2 my-md-2" variant="outline-dark" size="sm">Submit</Button>
              </Col>
            </Row>
        </div>
    )
}

export default Heading;