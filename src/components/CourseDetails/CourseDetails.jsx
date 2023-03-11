import React, { Component, Fragment } from 'react'
import c1 from '../../asset/image/CourseDetails.jpg'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import '../CourseDetails/CourseDetails.css'
import '../../asset/css/Bootstrap.min.css'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'

export class CourseDetails extends Component {
     render() {
          return (
               <Fragment>
                    <Container className="mt-5" >
                         <Row>
                              <Col lg={8} md={6} sm={12}>
                                   <h1> Couse Details </h1>
                                   <img src={c1} />

                                   <p>Install the software and libraries required for programming

                                        - Project analysis

                                        - Create a new project

                                        - Create the database and create the tables</p>


                              </Col>

                              <Col lg={4} md={6} sm={12}>
                                   <div className="box_feature">
                                        <h4 >Course Features</h4>
                                        <hr />
                                        <ul>
                                             <li><FontAwesomeIcon className="iconBullent" icon={faUser} /> <span> Enrolled :</span> 1200 students</li>

                                             <li><FontAwesomeIcon className="iconBullent" icon={faClock} /> <span>Duration :</span> 2 hours</li>

                                             <li><FontAwesomeIcon className="iconBullent" icon={faClipboard} /> <span>Lectures :</span> 8</li>

                                             <li><FontAwesomeIcon className="iconBullent" icon={faClone} /> <span>Categories:</span> Technology</li>

                                             <li><FontAwesomeIcon className="iconBullent" icon={faTags} /> <span>Tags:</span> C# & SQL SERVER</li>

                                             <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> <span>Instructor:</span> Nizar Damiriyye</li>

                                        </ul>
                                        <div className="price-d text-center" >
                                             <h5>Price:<span>$54.00</span></h5>
                                             <Button >ENROLL COURSE</Button>

                                        </div>
                                   </div>




                              </Col>
                         </Row>
                    </Container>

                    <br></br>  <br></br>

                    <Container>
                         <Row>
                              <Col lg={6} md={6} sm={12}>

                                   <div className="box_feature" >
                                        <h1 > Skill You Need  </h1>
                                        <hr />
                                        <ul>
                                             <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>
                                             <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Ligula cur maecenas</li>

                                             <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>

                                             <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} />Ligula cur maecenass</li>

                                             <li><FontAwesomeIcon className="iconBullent" icon={faCheckSquare} /> Metus interdum metus</li>

                                        </ul>
                                   </div>
                              </Col>


                              <Col lg={6} md={6} sm={12}>

                                   <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                        <BigPlayButton position="center" />
                                   </Player>
                              </Col>

                         </Row>
                    </Container>
















               </Fragment>
          )
     }
}

export default CourseDetails
