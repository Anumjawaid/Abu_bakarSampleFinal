import React, { useState } from 'react'
import LandChart from './landchart';
import PhaseChart from './phasechart';
import MuzChart from './muazachart';
import chart from './Ui/chart.png'


export default function Graphs(){
    let [chartval,setChartval]=useState("Purchased Land")
return(
    <>
    <div className="landpurchasedgraph panel panel-default">
<div className="headingborder">
     <div className="iconhead">
          <div className="icon"><img width='20px' height='20px' src={chart} /></div>
          <div className="title"><p>Plot Reports</p></div>
      </div>
      <div className="dropdownhead">
          {/* <div className="greyhead"><p className='title'></p></div> */}
          <div className="dropdown">
              <select onChange={(e)=>{setChartval(e.target.value)}}>
                  <option value="Land Providers">Land Providers</option>
                  <option value="Phase">Phase</option>
                  <option value="Muaza">Muaza</option>
              </select>

          </div>
      </div>


  </div>

  <div className="chartgraphshow">
      {chartval=="Muaza" ? <MuzChart/>:chartval=="Phase" ?<PhaseChart/>:<LandChart/>}
      
 
  </div>
</div>
    </>
)
}