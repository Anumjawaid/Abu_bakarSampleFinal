import React,{useState} from 'react';
import LandPurchasedTable from './LandTable';
import PhaseTable from './PhaseTable';
import chart from '../chart.png'
import MuzTable from './muazatable'

export default function TableGrid(){
    let [tableval,setTableval]=useState("Land Providers")
    return(
        <>
         <div className="landpurchased panel panel-default">
<div className="headingborder">
     <div className="iconhead">
          <div className="icon"><img width='20px' height='20px' src={chart} /></div>
          <div className="title"><p>Land Provider Details</p></div>
      </div>
      <div className="dropdownhead">
          <div className="greyhead"><p className='title'>Khasra</p></div>
          <div className="dropdown">
              {/* Onchange==>change property value based on dropdown */}
              <select onChange={(e)=>{setTableval(e.target.value)}}> 
                  <option value="Land Providers">Land Providers</option>
                  <option value="Phase">Phase</option>
                  <option value="Muaza">Muaza</option>
              </select>

          </div>
      </div>


  </div>

  <div className="jqxtable">
      {/* The below line Checks which table to display */}
      {tableval=="Muaza" ? <MuzTable/>:tableval=="Phase" ?<PhaseTable/>:<LandPurchasedTable/>}
      
 
  </div>
</div>
        </>

    )
}