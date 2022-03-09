
import React from 'react';
import { Chart, registerables } from 'chart.js';
import {Bar} from 'react-chartjs-2';
Chart.register(...registerables);


const state = {
  labels: ['Title1', 'Title2', 'Title3',
           'Title4', 'Title5'],
  datasets: [
    {
      label: 'Reports',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 70, 60, 81, 56]
    }
  ]
}

export default class MuazChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}