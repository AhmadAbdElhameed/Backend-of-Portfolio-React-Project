import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faMap} from '@fortawesome/free-solid-svg-icons'

export class Contact extends Component {
     render() {
          return (
               <Fragment>
                    <Container>
                         <Row>
                              <Col lg={6} md={6} sm={12} >
                                   <h1 className="serviceName">Quick Connect</h1>


                                   <Form>
                                        <Form.Group >
                                             <Form.Label>Your Name</Form.Label>
                                             <Form.Control type="text" placeholder="Enter your Name" />

                                        </Form.Group>

                                        <Form.Group >
                                             <Form.Label>Your Email</Form.Label>
                                             <Form.Control type="email" placeholder="Enter your Email" />

                                        </Form.Group>

                                        <br>
                                        </br>

                                        <Button variant="primary" type="submit">
                                             Submit
                                        </Button>
                                   </Form>

                              </Col>

                              <Col lg={6} md={6} sm={12} >
                              <h1 className="serviceName">Discuss Now</h1>

                              <p className="serviceDescription" >
                              <FontAwesomeIcon icon={faMap}  />   Addres : KONYA, SELÇUKLU,FERİTPAŞA MAH,MÜFTÜ LOKMAN HEKİM SK.<br></br>
                              <FontAwesomeIcon icon={faEnvelope}  />  Email: CTP1@gmail.com. <br></br>
                              <FontAwesomeIcon icon={faPhone}  />  Phone : +90 555 016 7003.
                              
                              </p>


                              </Col>



                         </Row>

                    </Container>


               </Fragment>
          )
     }
}

export default Contact
