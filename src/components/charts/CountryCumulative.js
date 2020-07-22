import React, { Component,useEffect,useState } from 'react';
import {fetchCummulativeCountry} from '../api/index'
import { Line } from 'react-chartjs-2'
import { Col, Row } from 'react-bootstrap'
// import CountUp from 'react-countup'

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
                    labels:dailyData.map(( { date }) => new Date(date).toDateString()),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => {
                            // console.log(Recovered);
                            return confirmed
                        }),
                        borderColor: 'rgba(100, 123, 192, 1)',
                        // backgroundColor: 'rgba(100, 123, 192, 1)',
                        pointRadius: 1,
                        label:'Confirmed'
                    },
                    {
                        data: dailyData.map(({ active }) => {
                            // console.log(active);
                            return active
                        }),
                        borderColor: '#EC4849',
                        // backgroundColor: '#e53935',
                        pointRadius: 1,
                        label:'Active'
                        },
                        {
                            data: dailyData.map(({ recovered }) => {
                                // console.log(Recovered);
                                return recovered
                            }),
                            borderColor: 'rgba(75, 192, 192, 1)',
                            // backgroundColor: 'rgba(75, 192, 192, 1)',
                            pointRadius: 1,
                            label:'Recovered'
                        },
                        {
                            data: dailyData.map(({ deaths }) => {
                                // console.log(Recovered);
                                return deaths
                            }),
                            borderColor: 'rgba(102, 102, 102, 0.7)',
                            // backgroundColor: 'rgba(102, 102, 102, 0.7)',
                            pointRadius: 1,
                            label:'Deceased'
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
                    aspectRatio: 0,
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
                    }]
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
        <Row className="pt-3 pb-5">
            <Col md={6} sm={12}>
                {lineChartConfirmed}
            </Col>
            {/* <Col md={3} sm={6}>
                {lineChartActive}
            </Col>
            <Col md={3} sm={6}>
                {lineChartRecovered}
            </Col>
            <Col md={3} sm={6}>
                {lineChartDeath}
            </Col> */}
       </Row>
    );
    
}

export default CountryCumulative;