import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import {Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )


export default function LineChart(){
return(
    <>
    <div className='linechart'>
    <Bar
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            
            {
              label: 'Quantity',
              data: [47, 52, 67, 58, 9, 50],
              backgroundColor: 'orange',
              borderColor: 'red',
            },
          ],
        }}
       
        />
         </div>
    </>
)
}