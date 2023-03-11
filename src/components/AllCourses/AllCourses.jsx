import React, { Component, Fragment } from 'react'
import { Col, Container ,Row} from 'react-bootstrap'
import c1 from '../../asset/image/course.jpg'
import '../AllCourses/AllCourses.css'
import {Link} from 'react-router-dom'
export class AllCourses extends Component {
     render() {
          return (
              <Fragment>

              <Container className="text-center" >

              <h1 className=" text-center serviceMainTitle">All Courses</h1>
              <div className="bottom"  ></div>
                   <Row>
                        <Col lg={6} md={6} sm={12} className="p-2" >

                             <Row>

                                  <Col  lg={6} md={6} sm={12}>
                                  <img className="courseImg" src={c1} />

                                  </Col>

                                  <Col lg={6} md={6} sm={12}>
                                  <h4 className="text-justify serviceName">Medical Clinic</h4>
                                  <p className="text-justify serviceDescription" >C sharp & Sql Server Full Professional Course.</p>
                                  <Link className="courseViewMore"to="/CourseDetailsPage">View Details </Link>
                                  

                                  </Col>


                             </Row>

                        </Col>

                        <Col lg={6} md={6} sm={12}>

                             <Row>

                                  <Col  lg={6} md={6} sm={12}>
                                  <img className="courseImg" src={c1} />

                                  </Col>

                                  <Col lg={6} md={6} sm={12}>
                                  <h4 className="text-justify serviceName">Medical Clinic</h4>
                                  <p className="text-justify serviceDescription" >C sharp & Sql Server Full Professional Course.</p>
                                  <Link className="courseViewMore"to="/CourseDetailsPage">View Details </Link>

                                  </Col>


                             </Row>

                        </Col>


                   </Row>

                   <Row>
                   <Col lg={6} md={6} sm={12} className="p-2" >

                        <Row>

                             <Col  lg={6} md={6} sm={12}>
                             <img className="courseImg" src={c1} />

                             </Col>

                             <Col lg={6} md={6} sm={12}>
                             <h4 className="text-justify serviceName">Medical Clinic</h4>
                             <p className="text-justify serviceDescription" >C sharp & Sql Server Full Professional Course.</p>
                             <Link className="courseViewMore"to="/CourseDetailsPage">View Details </Link>

                             </Col>


                        </Row>

                   </Col>

                   <Col lg={6} md={6} sm={12}>

                        <Row>

                             <Col  lg={6} md={6} sm={12}>
                             <img className="courseImg" src={c1} />

                             </Col>

                             <Col lg={6} md={6} sm={12}>
                             <h4 className="text-justify serviceName">Medical Clinic</h4>
                             <p className="text-justify serviceDescription" >C sharp & Sql Server Full Professional Course.</p>
                             <Link className="courseViewMore"to="/CourseDetailsPage">View Details </Link>
                             

                             </Col>


                        </Row>

                   </Col>


              </Row>

                   


              </Container>




              
              </Fragment>
          )
     }
}

export default AllCourses
