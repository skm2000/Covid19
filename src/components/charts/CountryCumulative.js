import React, { Component,useEffect,useState } from 'react';
import {fetchCummulativeCountry} from '../api/index'
import { Line } from 'react-chartjs-2'
import { Col, Row } from 'react-bootstrap'
// import CountUp from 'react-countup'
import NewsCountry from '../Cases/NewsCountry'

const CountryCumulative = (props) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() =>{
        const fetchAPI = async () => {
            setDailyData(await fetchCummulativeCountry(props.country))
        }
        fetchAPI()
    }, [props])

    // const lineChartRecovered = (
    //     dailyData.length
    //     ?(
    //         <Line
    //             data={{
    //                 labels:dailyData.map(( { date }) => date),
    //                 datasets: [{
    //                     data: dailyData.map(({ recovered }) => {
    //                         // console.log(Recovered);
    //                         return recovered
    //                     }),
    //                     borderColor: 'rgba(75, 192, 192, 1)',
    //                     backgroundColor: 'white',
    //                     pointRadius: 1,
    //                 }]
    //             }}
    //             options={{
    //                 // maintainAspectRatio: false,
    //                 legend: {
    //                    display: true
    //                 },
    //                 responsive: true,
    //                 aspectRatio: 2,
    //                 scales: {
    //                 xAxes: [{
    //                     gridLines: {
    //                         display:true
    //                     },
    //                     ticks: {
    //                         display: true //this will remove only the label
    //                     }
    //                 }],
    //                 yAxes: [{
    //                     gridLines: {
    //                         display:true
    //                     },
    //                     ticks: {
    //                         display: true //this will remove only the label
    //                     }   
    //                 }]
    //             },
    //             }}
    //         />
    //     ):null
    // )

    // const lineChartDeath = (
    //     dailyData.length
    //     ?(
    //         <Line
    //             data={{
    //                 labels:dailyData.map(( { date }) => date),
    //                 datasets: [{
    //                     data: dailyData.map(({ deaths }) => {
    //                         // console.log(Recovered);
    //                         return deaths
    //                     }),
    //                     borderColor: 'rgba(100, 123, 192, 1)',
    //                     backgroundColor: 'white',
    //                     pointRadius: 1,
    //                 }]
    //             }}
    //             options={{
    //                 // maintainAspectRatio: false,
    //                 legend: {
    //                    display: false
    //                 },
    //                 responsive: true,
    //                 aspectRatio: 0,
    //                 scales: {
    //                 xAxes: [{
    //                     gridLines: {
    //                         display:false
    //                     },
    //                     ticks: {
    //                         display: false //this will remove only the label
    //                     }
    //                 }],
    //                 yAxes: [{
    //                     gridLines: {
    //                         display:false
    //                     },
    //                     ticks: {
    //                         display: false //this will remove only the label
    //                     }   
    //                 }]
    //             },
    //             }}
    //         />
    //     ):null
    // )
    
    // const lineChartActive = (
    //     dailyData.length
    //     ?(
    //         <Line
    //             data={{
    //                 labels:dailyData.map(( { date }) => date),
    //                 datasets: [{
    //                     data: dailyData.map(({ active }) => {
    //                         // console.log(active);
    //                         return active
    //                     }),
    //                     borderColor: 'rgba(75, 192, 192, 1)',
    //                     backgroundColor: 'white',
    //                     pointRadius: 1,
    //                 }]
    //             }}
    //             options={{
    //                 // maintainAspectRatio: false,
    //                 legend: {
    //                    display: false
    //                 },
    //                 responsive: true,
    //                 aspectRatio: 0,
    //                 scales: {
    //                 xAxes: [{
    //                     gridLines: {
    //                         display:false
    //                     },
    //                     ticks: {
    //                         display: false //this will remove only the label
    //                     }
    //                 }],
    //                 yAxes: [{
    //                     gridLines: {
    //                         display:false
    //                     },
    //                     ticks: {
    //                         display: false //this will remove only the label
    //                     }   
    //                 }]
    //             },
    //             }}
    //         />
    //     ):null
    // )

    const lineChartConfirmed = (
        dailyData.length
        ?(
            <Line
                data={{
                    labels:dailyData.map(( { date }) =>{ 
                        
                        const  dt = new Date(date).toDateString()
                    //     console.log("Date", dt)
                        return dt.substr(4, 6);   
                    } 
                    ),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => {
                            // console.log(Recovered);
                            return confirmed
                        }),
                        borderColor: 'rgba(255, 99, 132, 1)',
                        // backgroundColor: 'rgba(100, 123, 192, 1)',
                        pointRadius: 1,
                        label:'Confirmed',
                        fill: false
                    },
                    {
                        data: dailyData.map(({ active }) => {
                            // console.log(active);
                            return active
                        }),
                        borderColor: '#ffce56',
                        // backgroundColor: '#e53935',
                        pointRadius: 1,
                        label:'Active',
                        fill: false
                        },
                        {
                            data: dailyData.map(({ recovered }) => {
                                // console.log(Recovered);
                                return recovered
                            }),
                            borderColor: 'rgba(75, 192, 192, 1)',
                            // backgroundColor: 'rgba(75, 192, 192, 1)',
                            pointRadius: 1,
                            label:'Recovered',
                            fill: false
                        },
                        {
                            data: dailyData.map(({ deaths }) => {
                                // console.log(Recovered);
                                return deaths
                            }),
                            borderColor: '#616161',
                            // backgroundColor: 'rgba(102, 102, 102, 0.7)',
                            pointRadius: 1,
                            label:'Deceased',
                            fill: false
                        }
                    ]
                }}
                options={{
                    // maintainAspectRatio: false,
                    legend: {
                        display: true,
                        // text: ['Confirmed','Active','Recovered','Deceased']
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: true //this will remove only the label
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:true
                        },
                        ticks: {
                            display: true //this will remove only the label
                        }   
                    }],
                    
                },
                }}
            />
        ):null
    )

    return (
        // <div>
        //     {/* <h1> */}
        //     {lineChartRecovered}
        //     {lineChartDeath}
        //     {/* </h1> */}
        // </div>
        <Row className="pt-3 pb-4" style={{minHeight:'500px'}}>
            <Col md={6} sm={12}>
                {lineChartConfirmed}
            </Col>
            <Col md={6} sm={12}>
                <NewsCountry country={props.country} />
            </Col>
            {/* <Col md={3} sm={6}>
                {lineChartRecovered}
            </Col>
            <Col md={3} sm={6}>
                {lineChartDeath}
            </Col>  */}
       </Row>
    );
    
}

export default CountryCumulative;