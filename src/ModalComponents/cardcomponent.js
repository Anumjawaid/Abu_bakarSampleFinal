import React from "react";
import {Button, Container, Row, Col, Card, Modal, Accordion, Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';


// modal function definition
function MyVerticallyCenteredModal(props) {
    console.log(props, "props")
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: "15px"}}>
          <span><FontAwesomeIcon icon={faBoxArchive} className="float-start mt-1" color="black"/></span>&nbsp;
           Possessed Land Detail Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
              {/* collapsed */}
              <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Phase Wise Data</Accordion.Header>
                        <Accordion.Body>
                            {/* table */}
                            
                            <div style={{overflowY: "scroll", maxHeight: "300px", overflowX: "hidden"}}>
                            <Row>
                                <Col>
                                 <div style={{backgroundColor: "#4B68B8"}} className="text-white"><center>Phase Data</center></div>

                                </Col>
                            </Row>
                            <Table bordered hover size="sm" >
                               
                              
                               <thead style={{backgroundColor: "#4B68B8"}} className="text-white">
                                  
                                   <tr >
                                   <td className="text-center">Serial No</td>
                                   <td className="text-center">Phase Name</td>
                                   <td className="text-center">Muaze Name</td>
                                   <td className="text-center">Possessed Land</td>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                   <td  className="text-center">1</td>
                                   <td className="text-center">Mark</td>
                                   <td className="text-center">Otto</td>
                                   <td className="text-center">@mdo</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                  
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   

                                 
                               </tbody>
                               </Table>
                            </div>
                           
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>Muaze Wise Data</Accordion.Header>
                    <Accordion.Body>
                            {/* table */}
                            
                            <div style={{overflowY: "scroll", maxHeight: "300px", overflowX: "hidden"}}>
                            <Row>
                                <Col>
                                 <div style={{backgroundColor: "#4B68B8"}} className="text-white"><center>Muaze Data</center></div>

                                </Col>
                            </Row>
                            <Table bordered hover size="sm" >
                               
                              
                               <thead style={{backgroundColor: "#4B68B8",}} className="text-white">
                                  
                                   <tr>
                                   <td className="text-center">Serial No</td>
                                   <td className="text-center">Phase Name</td>
                                   <td className="text-center">Muaze Name</td>
                                   <td className="text-center">Possessed Land</td>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                   <td  className="text-center">1</td>
                                   <td className="text-center">Mark</td>
                                   <td className="text-center">Otto</td>
                                   <td className="text-center">@mdo</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                  
                                   <tr>
                                   <td className="text-center">2</td>
                                   <td className="text-center">Jacob</td>
                                   <td className="text-center">Thornton</td>
                                   <td className="text-center">@fat</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   <tr>
                                   <td className="text-center">3</td>
                                   <td  className="text-center" >Larry the Bird</td>
                                   <td className="text-center">@twitter</td>
                                   <td className="text-center">@twitter</td>
                                   </tr>
                                   

                                 
                               </tbody>
                               </Table>
                            </div>
                           
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-success" onClick={props.onHide}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }

//   cards and modals
const CardComponent = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    return(
                <Container>
                   <br/>
                    <Row>
                        <Col lg="2">
                                <Card >
                                    <Card.Body style={{backgroundColor: "#32CD32"}}>
                                        <Card.Text>
                                           <Row>
                                              <Col lg="2">
                                              <FontAwesomeIcon icon={faCartShopping} className="float-start" color="white"/>
                                              </Col>
                                              <Col lg="9">
                                               <div className="text-white text-end"><h6>Land</h6></div>
                                                <div className="text-white text-end" style={{fontSize: "13px"}}>Purchased Land</div>
                                              </Col>
                                           </Row>
                                        </Card.Text>
                                       </Card.Body>
                                       
                                    <Card.Footer style={{height: "40px"}}>
                                        <Row>
                                        <Col>
                                            <p className="text-success text-start" style={{ fontSize: "13px", cursor: "pointer"}} onClick={() => setModalShow(true)}>
                                                View Details
                                                <span className="float-end"><FontAwesomeIcon icon={faGear} /></span>
                                            </p>
                                                
                                            <MyVerticallyCenteredModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                               
                                            />
                                            
                                        </Col>
                                            </Row>
                                    </Card.Footer>
                                </Card>
                        </Col>
                        <Col lg="2">
                        <Card >
                                    <Card.Body style={{backgroundColor: "gray"}}>
                                        <Card.Text>
                                           <Row>
                                              <Col lg="2">
                                              <FontAwesomeIcon icon={faBoxArchive} className="float-start" color="white"/>

                                              </Col>
                                              <Col lg="9">
                                               <div className="text-white text-end"><h6>Land</h6></div>
                                                <div className="text-white text-end" style={{fontSize: "13px"}}>Total Possession</div>
                                              </Col>
                                           </Row>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Footer style={{height: "40px"}}>
                                        <Row>
                                            <Col>
                                                <p className="text-dark text-start"  style={{ fontSize: "13px",cursor: "pointer"}} onClick={() => setModalShow(true)}>
                                                    View Details
                                                    <span className="float-end"><FontAwesomeIcon icon={faGear} /></span>
                                                </p>
                                                        
                                                <MyVerticallyCenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    
                                                />
                                                    
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                </Card>
                        </Col>
                        <Col lg="2">
                        <Card >
                                    <Card.Body style={{backgroundColor: "#FFBF00"}}>
                                        <Card.Text>
                                           <Row>
                                              <Col lg="2">
                                              <FontAwesomeIcon icon={faMap} className="float-start" color="white"/>

                                              </Col>
                                              <Col lg="9">
                                               <div className="text-white text-end"><h6>Land</h6></div>
                                                <div className="text-white text-end" style={{fontSize: "13px"}}>LeftOver Land</div>
                                              </Col>
                                           </Row>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Footer style={{height: "40px"}}>
                                        <Row>
                                                <Col>
                                                        <p className="text-warning text-start"  style={{ fontSize: "13px",cursor: "pointer"}} onClick={() => setModalShow(true)}>
                                                            View Details
                                                            <span className="float-end"><FontAwesomeIcon icon={faGear} /></span>
                                                        </p>
                                                        
                                                        <MyVerticallyCenteredModal
                                                            show={modalShow}
                                                            onHide={() => setModalShow(false)}
                                                           
                                                        />
                                                    
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                </Card>
                        
                        </Col>
                        <Col lg="2">
                        <Card >
                                    <Card.Body style={{backgroundColor: "#DDA0DD"}}>
                                        <Card.Text>
                                           <Row>
                                              <Col lg="2">
                                              <FontAwesomeIcon icon={faBan} className="float-start" color="white"/>

                                              </Col>
                                              <Col lg="9">
                                               <div className="text-white text-end"><h6>Land</h6></div>
                                                <div className="text-white text-end" style={{fontSize: "13px"}}>Hold Land</div>
                                              </Col>
                                           </Row>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Footer style={{height: "40px"}}>
                                        <Row>
                                                <Col>
                                                        <p className=" text-start" style={{ fontSize: "13px", color: "#DDA0DD",cursor: "pointer"}} onClick={() => setModalShow(true)}>
                                                            View Details
                                                            <span className="float-end"><FontAwesomeIcon icon={faGear} /></span>
                                                        </p>
                                                        
                                                        <MyVerticallyCenteredModal
                                                            show={modalShow}
                                                            onHide={() => setModalShow(false)}
                                                            
                                                        />
                                                    
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                </Card>
                        </Col>
                        <Col lg="2">
                        <Card >
                                    <Card.Body className="bg-danger">
                                        <Card.Text>
                                           <Row>
                                              <Col lg="2">
                                              <FontAwesomeIcon icon={faBalanceScale} className="float-start" color="white"/>

                                              </Col>
                                              <Col lg="9">
                                               <div className="text-white text-end"><h6>Land</h6></div>
                                                <div className="text-white text-end" style={{fontSize: "13px"}}>Litigation Land</div>
                                              </Col>
                                           </Row>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Footer style={{height: "40px"}}>
                                        <Row>
                                                <Col>
                                                        <p className="text-danger text-start"  style={{ fontSize: "13px",cursor: "pointer"}} onClick={() => setModalShow(true)}>
                                                            View Details
                                                            <span className="float-end"><FontAwesomeIcon icon={faGear} /></span>
                                                        </p>
                                                        
                                                        <MyVerticallyCenteredModal
                                                            show={modalShow}
                                                            onHide={() => setModalShow(false)}
                                                            
                                                        />
                                                    
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                </Card>
                        </Col>
                        <Col lg="2">
                        <Card >
                                    <Card.Body className="bg-primary">
                                        <Card.Text>
                                           <Row>
                                              <Col lg="2">
                                              <FontAwesomeIcon icon={faFile} className="float-start" color="white"/>

                                              </Col>
                                              <Col lg="9">
                                               <div className="text-white text-end"><h6>Land</h6></div>
                                                <div className="text-white text-end" style={{fontSize: "13px"}}>Mutation Rec'd</div>
                                              </Col>
                                           </Row>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Footer style={{height: "40px"}}>
                                        <Row>
                                                <Col>
                                                        <p className="text-primary text-start" style={{ fontSize: "13px",cursor: "pointer"}} onClick={() => setModalShow(true)}>
                                                            View Details
                                                            <span className="float-end"><FontAwesomeIcon icon={faGear} /></span>
                                                        </p>
                                                        
                                                        <MyVerticallyCenteredModal
                                                            show={modalShow}
                                                            onHide={() => setModalShow(false)}
                                                           
                                                        />
                                                    
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                </Card>
                        </Col>
                      
                    </Row>
                    </Container>
                   
                  
      
    )
}

export default CardComponent