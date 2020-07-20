
import React from 'react';
import { Bar } from 'react-chartjs-2';

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
                      ],
            data:[props.confirmed,props.active,props.recovered,props.deaths]
           }]
         }}
         options={{
                  legend: { display: false},
                  title: { display:true, text:`Current state in ${props.country}`}
          }}
        />
    ):null
  )
  return (
    <div>
      {barChart}
    </div>
  )
}

export default StateCharts;