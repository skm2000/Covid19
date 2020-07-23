import React from 'react';
import { Bar,Doughnut } from 'react-chartjs-2';

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
                          '#ffce56',
                          'rgba(75, 192, 192, 1)',
                          '#616161'
                      ],
            data:[props.confirmed,props.active,props.recovered,props.deaths]
           }]
         }}
         options={{
                  legend: { display: false},
                  title: { display:true, text:`${props.state}`},
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
                    }]
                }
          }}
        />
    ):null
  )

  // const doughnutChart = (
  //   props.confirmed?(
  //     <Doughnut 
  //        data={{
  //          labels: ['Confirmed','Active','Recovered','Deaths'],
  //          datasets: [{
  //           label: 'People',
  //                     backgroundColor: [
  //                         'rgba(0, 0, 255, 0.5)',
  //                         'rgba(0, 255, 0, 0.5)',
  //                         'rgba(255, 0, 0, 0.5)',
  //                         '#212121'
  //                     ],
  //           data:[props.confirmed,props.active,props.recovered,props.deaths]
  //          }]
  //        }}
  //        options={{
  //         scales: {
  //           xAxes: [{
  //              gridLines: {
  //                 display: false
  //              }
  //           }],
  //           yAxes: [{
  //              gridLines: {
  //                 display: false
  //              }
  //           }]
  //      },
  //                 legend: { display: false},
  //                 title: { display:true, text:`${props.state}`},
  //         }}
  //       />
  //   ):null
  // )
  return (
    <div style={{minHeight:'400px'}}>
      {barChart}
    </div>
  )
}

export default StateCharts;