import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import '../Videos/Videos.css'
import '../../asset/css/Bootstrap.min.css'
import "video-react/dist/video-react.css"

import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { Player, BigPlayButton } from 'video-react';




class Videos extends Component {

     constructor() {

          super();
          this.state = {
               show: false
          }
     }


     handleClose = () => this.setState({ show: false });
     handleShow = () => this.setState({ show: true });

     render() {
          return (
               <Fragment>

                    <Container>
                         <h1 className="serviceMainTitle  text-center"> MY Video</h1>
                         <div className="bottom"  ></div>

                         <Row>
                              <Col lg={6} md={12} sm={12} className="videText">

                                   <p >
                                        Hi! I'm Nizar Damiriyye. I'm a Computer Engineer & developer with a serious love for teaching I am a founder of Cearive Team Programming (C.T.P) and a Programmer & Instructor.<br></br><br></br>

                                        I am working online for the last 5 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. Cearive Team Programming exists to help you succeed in life.<br></br><br></br>

                                        Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.<br></br><br></br>


                                   </p>

                              </Col>

                              <Col lg={6} md={12} sm={12} className="videoCard text-center">

                                   <FontAwesomeIcon onClick={this.handleShow} icon={faVideoSlash} className="iconProject " />

                              </Col>


                         </Row>

                    </Container>


                    <Modal size="lg" show={this.state.show} onHide={this.handleClose}>

                         <Modal.Body>
                        
                       <Modal.Body>
                       <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                       <BigPlayButton position="center" />
                     </Player>
                       
                       </Modal.Body>
                        </Modal.Body>
                         <Modal.Footer>
                              <Button variant="secondary" onClick={this.handleClose}>
                                   Close
                              </Button>

                         </Modal.Footer>
                    </Modal>


               </Fragment>
          )
     }
}

export default Videos
