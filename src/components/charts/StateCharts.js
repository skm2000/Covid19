import React from 'react';
import { Bar,Doughnut } from 'react-chartjs-2';
import { Switch } from 'antd'

const StateCharts = (props) => {
  const barChart = (
    props.confirmed?(
      <Bar 
         data={{
           labels: ['Confirmed','Active','Recovered','Deceased'],
           datasets: [{
            label: 'People',
                      backgroundColor: [
                          'rgba(255, 99, 132, 1)',
                          '#e53935',
                          'rgba(75, 192, 192, 1)',
                          'rgba(102, 102, 102, 0.7)'
                      ],
            data:[props.confirmed,props.active,props.recovered,props.deaths]
           }]
         }}
         options={{
                  legend: { display: false},
                  title: { display:true, text:`${props.state}`}
          }}
        />
    ):null
  )

  const doughnutChart = (
    props.confirmed?(
      <Doughnut 
         data={{
           labels: ['Confirmed','Active','Recovered','Deaths'],
           datasets: [{
            label: 'People',
                      backgroundColor: [
                          'rgba(0, 0, 255, 0.5)',
                          'rgba(0, 255, 0, 0.5)',
                          'rgba(255, 0, 0, 0.5)',
                          '#212121'
                      ],
            data:[props.confirmed,props.active,props.recovered,props.deaths]
           }]
         }}
         options={{
                  legend: { display: false},
                  title: { display:true, text:`${props.state}`}
          }}
        />
    ):null
  )
  return (
    <>
      <Switch/>
      {barChart}
    </>
  )
}

export default StateCharts;