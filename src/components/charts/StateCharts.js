import React from 'react';
import { Bar,Doughnut } from 'react-chartjs-2';

const StateCharts = (props) => {
  const barChart = (
    props.confirmed?(
      <Bar 
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
    <div>
      {barChart}
      {doughnutChart}
    </div>
  )
}

export default StateCharts;