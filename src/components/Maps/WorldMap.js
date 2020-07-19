import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { fetchCountrie } from '../api/index';
import { Row } from 'react-bootstrap';


// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end


class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesData: [],
      countryCode: "US",
      loading: false
    };
    this.triggerTooltip = this.triggerTooltip.bind(this);
    this.triggerPK = this.triggerPK.bind(this);
  }
  async componentDidMount() {
    // Create map instance
    const something = await fetchCountrie();
    this.setState({ countriesData:something, loading: true });

    var chart = am4core.create("chartdiv", am4maps.MapChart);
    chart.seriesContainer.background.fill = am4core.color("#fff")

    // Set map definition
    chart.geodataSource.url =
      "https://www.amcharts.com/lib/4/geodata/json/worldLow.json";
    chart.geodataSource.events.on("parseended", function (event) {
      let data = [];
      let data1 = [];
      let markers = [];

      something.map((country) => {
        data1.push({
          id: country.countryInfo.iso2,
          value: country.cases
         });
        markers.push({
          id: country.countryInfo.iso2,
          title: country.country,
          confirmed: country.cases,
          active: country.active,
          recovered: country.recovered,
          deaths: country.deaths,
          latitude: country.countryInfo.lat,
          longitude: country.countryInfo.long,
        });
      });
      for (var i = 0; i < event.target.data.features.length; i++) {
        data.push({
          id: event.target.data.features[i].id,
          value: something[12].cases,
        });
      }
      polygonSeries.data = data1;
      imageSeries.data = markers;
      labelSeries.data = data1;
    });

    // Set projection
    chart.projection = new am4maps.projections.Miller();
  

    // Add zoom control
    chart.zoomControl = new am4maps.ZoomControl();

    // Set initial zoom
    chart.homeZoomLevel = 1;

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.mapPolygons.template.strokeWidth = 1.0;

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    polygonSeries.calculateVisualCenter = true;
    polygonSeries.exclude = ["AQ"];
   

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.propertyFields.id = "id";

    let labelSeries = chart.series.push(new am4maps.MapImageSeries());
    let labelTemplate = labelSeries.mapImages.template.createChild(am4core.Label);
    labelTemplate.horizontalCenter = "middle";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fontSize = 10;
    labelTemplate.nonScaling = true;
    labelTemplate.interactionsEnabled = false;

    // polygonSeries.events.on("inited", function () {
    //   polygonSeries.mapPolygons.each(function (polygon) {
    //     let label = labelSeries.mapImages.create();
    //     let state = polygon.dataItem.dataContext.id;
    //     label.latitude = polygon.visualLatitude;
    //     label.longitude = polygon.visualLongitude;
    //     label.children.getIndex(0).text = state;
    //   });
    // });
    polygonSeries.heatRules.push({
      "property": "fill",
      "target": polygonSeries.mapPolygons.template,
      "min": am4core.color("pink"),
      "max": am4core.color("red")
    });

    polygonTemplate.tooltipHTML = `{name}`;
    polygonTemplate.fill = am4core.color("#d6e7ea");

    polygonSeries.mapPolygons.template.tooltipPosition = "fixed";
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(4);

    // Create active state
    var activeState = polygonTemplate.states.create("active");
    activeState.properties.fill = chart.colors.getIndex(1);

    // Create an event to toggle "active" state
    polygonTemplate.events.on("hit", function (event) {
      event.target.isActive = !event.target.isActive;
    });

    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
    let imageSeriesTemplate = imageSeries.mapImages.template;
   
    
    imageSeries.tooltip.showInViewport = true;
    imageSeries.tooltip.fontSize = 10;
    imageSeries.tooltip.paddingBottom = 30;  
    imageSeries.tooltip.background.fillOpacity = 1.0;
    imageSeries.tooltip.getStrokeFromObject = false;
    imageSeries.tooltip.getFillFromObject = false;
    imageSeries.tooltip.background.fill = am4core.color("#00272b");


    imageSeriesTemplate.tooltipPosition = "fixed";
    imageSeriesTemplate.tooltipHTML = `<div class="tooltip">
                                         <b>{title}</b><br>
                              <span>Confirmed:<b class = tooltip__conf> {confirmed}</b></span><br>
                              <span>Active:<b class = tooltip__act> {active}</b></span><br>
                              <span>Recovered:<b class = tooltip__rec> {recovered}</b></span><br>
                              <span>Deaths:<b class = tooltip__deaths> {deaths}</b></span><br></div>`;
                              
    imageSeries.dataFields.id = "id";
    imageSeries.dataFields.value = "active";                                    
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";
    

    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    // circle.radius = 4;
    // circle.stroke = am4core.color("#FFFFFF");
    // circle.strokeWidth = 2;
    circle.fill = am4core.color("#ff0000");
    circle.fillOpacity = 0.5
    circle.nonScaling = true;
    circle.tooltipText = "{title}";
    imageSeries.heatRules.push({
      "target": circle,
      "property": "radius",
      "min": 5,
      "max": 30,
      "dataField": "value"
    })
    var heatLegend = chart.createChild(am4maps.HeatLegend);
      heatLegend.series = polygonSeries;
      heatLegend.width = am4core.percent(100);

      polygonSeries.mapPolygons.template.events.on("over", function(ev) {
        if (!isNaN(ev.target.dataItem.value)) {
          heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
        }
        else {
          heatLegend.valueAxis.hideTooltip();
        }
      });

      polygonSeries.mapPolygons.template.events.on("out", function(ev) {
        heatLegend.valueAxis.hideTooltip();
      });

    
    this.chart = chart;
    this.chart.events.on("ready", this.triggerPK)
  
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  triggerTooltip(code) {
    let imagesLe = this.chart._series._values[1]._mapImages._values.length;
    let imageFind, polygonFind;
    this.chart._series._values[0]._mapPolygons._values.forEach((image, inde) => {
      if (image._dataItem._dataContext.id === code) {
         polygonFind = image;
      }
    
  });
    this.chart._series._values[1]._mapImages._values.forEach((image) => {
      if (image._dataItem._dataContext.id === code) {
        imageFind = image;
      }
    });

    polygonFind.isHover = polygonFind.isHover ? false : true;
    imageFind.isHover = imageFind.isHover ? false :true 
  }
  triggerPK(){
     if(this.state.loading){
    let imagePK;
    this.chart._series._values[1]._mapImages._values.forEach((image) => {
      if (image._dataItem._dataContext.id === 'PK') {
        imagePK = image;
        console.log(imagePK)
      }
    });
    imagePK.isHover = true;
    }
   }
  render() {
    return (
      <div id="chartdiv" style={{  minHeight: "500px" }}></div>      
    );
  }
}

export default WorldMap;