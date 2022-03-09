import React from 'react';
import TableGrid from './Tables/maintable';
import Graphs from './chart';
import MyVerticallyCenteredModal from './ModalComponents/cardcomponent'



export default function Intgegrate(){
    return(
          <>
          <nav className="navbar navbar navcolor">
  <span className="navbar-brand mb-0 h1">Navbar</span>
</nav>
          <div className="mainsec">
              <div className="componentsection">
                  <MyVerticallyCenteredModal />
                  </div>
                  <div className="maptablesection">
                      <div className="tablesection">
                          <TableGrid />
                          </div>
                      <div className="mapsection">
                          <div className="mapdiv">
                              <p>Map Section</p>
                              </div>
                          </div>
                      </div>
                      <div className="chartgraphsection">
                          <Graphs />
                          </div>
                  </div>
          </>
    )
}