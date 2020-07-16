import React, { useState } from 'react';
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
import { Row,Container } from 'react-bootstrap';

const WorldMap = () => {
   const [content, setContent] = useState("");
  return (
    <Container>
    <Row>
    <div className="map" style={{'height':'20px', 'width': '100%', 'border':'10px'}}>
      <MapChart setTooltipContent={setContent} />
    </div>
      <ReactTooltip>{content}</ReactTooltip>
    </Row>
    </Container>
  ); 
}

export default WorldMap;