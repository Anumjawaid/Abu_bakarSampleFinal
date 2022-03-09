import React,{useState} from 'react';


export default function Tables(){
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
          <div className="greyhead"><p className='title'>Khasra Detail</p></div>
          <div className="dropdown">
              <select onChange={(e)=>{setTableval(e.target.value)}}>
                  <option value="Land Providers">Land Providers</option>
                  <option value="Phase">Phase</option>
                  <option value="Muaza">Muaza</option>
              </select>

          </div>
      </div>


  </div>

  <div className="jqxtable">
      {tableval=="Muaza" ? <Muaza/>:tableval=="Phase" ?<Phase/>:<LandProviders/>}
      
 
  </div>
</div>
        </>
    )
}