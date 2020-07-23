import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Button,Container,Row,Col } from 'react-bootstrap';
import '../Heading/heading.css'

const Heading = () => {
    return (
        <div style={{color: '#616161'}}>
              <Col className="example" xs={12}><b>COVID-19 GLOBAL</b>
              </Col>
        </div>
    )
}

export default Heading;

{/* <ReactStars count={5} size={32} activeColor="red"/> */}