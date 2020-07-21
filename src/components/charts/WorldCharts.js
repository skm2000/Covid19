import React, { useEffect,useState } from 'react'
import { fetchDailyData } from '../api/index'
import { Line } from 'react-chartjs-2'
import { Row } from 'react-bootstrap'


const WorldCharts = () => {
    // console.log(status)
    const [dailyData, setDailyData] = useState([])

    useEffect(() =>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    }, [])

    
    const lineChart = (
        dailyData.length
        ?(
            <Line
                data={{
                    labels:dailyData.map(( { date }) => date),
                    datasets: [{
                        data: dailyData.map(( { confirmed }) => confirmed),
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'white',
                        pointRadius: 1,
                    }]
                }}
                options={{
                    // maintainAspectRatio: false,
                    legend: {
                       display: false
                    },
                    responsive: true,
                    aspectRatio: 0,
                    scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }   
                    }]
                },
                }}
            />
        ):null
    )


    return (
        <Row>
            {lineChart}        
        </Row>
    )
}

export default WorldCharts;