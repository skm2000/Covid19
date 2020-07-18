import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React, { useRef, useLayoutEffect } from 'react';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

const MyMaps = () => {
    const chart = useRef(null);

    return (
        <div id="chartdiv" style={{ width: "50%", height: "500px" }}></div>
    )
}




export default MyMaps;