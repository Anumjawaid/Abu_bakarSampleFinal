import React from 'react';
import TableGrid from '../Ui/Tables/maintable';
import Graphs from './chart'
import MyVerticallyCenteredModal from '../Ui/ModalComponents/cardcomponent'



export default function Intgegrate() {
    return (
        <>
            <nav className="navbar navbar navcolor">
                <span className="navbar-brand mb-0 h1">Navbar</span>
            </nav>
            <div className="mainsec">
                <div className="componentsection">
                    <MyVerticallyCenteredModal />
                </div>
                <br /><br />
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
                <br /><br />
                <div className="chartgraphsection">
                    <Graphs />
                </div>
            </div>
        </>
    )
}