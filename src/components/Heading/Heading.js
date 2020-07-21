import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Button,Container,Row,Col } from 'react-bootstrap';
import '../Heading/heading.css'

const Heading = () => {
    return (
        <div>
            <Row>
              <Col className="example" xs={5}><b>COVID19 GLOBAL</b>
              </Col>
              <Col xs={7} className="stars d-md-flex justify-content-end d-sm-flex">
                 <form action=""> <input class="star star-5" id="star-5" type="radio" name="star" /> <label class="star star-5" for="star-5"></label> <input class="star star-4" id="star-4" type="radio" name="star" /> <label class="star star-4" for="star-4"></label> <input class="star star-3" id="star-3" type="radio" name="star" /> <label class="star star-3" for="star-3"></label> <input class="star star-2" id="star-2" type="radio" name="star" /> <label class="star star-2" for="star-2"></label> <input class="star star-1" id="star-1" type="radio" name="star" /> <label class="star star-1" for="star-1"></label> </form>
                 <Button className="mx-md-2 my-md-2" variant="outline-dark" size="sm" style={{maxHeight:'33px'}}>Submit</Button>
              </Col>
              {/* <Col xs={6} className="d-md-flex justify-content-end">
              <Col >
                <form action=""> <input class="star star-5" id="star-5" type="radio" name="star" /> <label class="star star-5" for="star-5"></label> <input class="star star-4" id="star-4" type="radio" name="star" /> <label class="star star-4" for="star-4"></label> <input class="star star-3" id="star-3" type="radio" name="star" /> <label class="star star-3" for="star-3"></label> <input class="star star-2" id="star-2" type="radio" name="star" /> <label class="star star-2" for="star-2"></label> <input class="star star-1" id="star-1" type="radio" name="star" /> <label class="star star-1" for="star-1"></label> </form>
               </Col>
                  
              </Col> */}
            </Row>
        </div>
    )
}

export default Heading;

{/* <ReactStars count={5} size={32} activeColor="red"/> */}