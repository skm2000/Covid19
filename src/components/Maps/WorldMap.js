import React, { useState } from 'react';
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";

function WorldMap() {
   const [content, setContent] = useState("");
  return (
    <div>
    <div className="map" style={{'height':'200px', 'width': '700px', 'border':'10px', 'outline':'dotted'}}>
      <MapChart setTooltipContent={setContent} />
    </div>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  ); 
}

export default WorldMap;