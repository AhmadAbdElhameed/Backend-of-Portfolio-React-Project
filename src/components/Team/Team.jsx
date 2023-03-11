import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import team from '../../asset/image/team.jpg'
import '../Team/Team.css'
import '../../asset/css/Bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class Team extends Component {
    render() {

        const settings = {
            dots: true,
            
            infinite: true,
            speed: 500,
            slidesToShow:1,
            slidesToScroll:2,

            vertical:true,
            verticalSwiping:true,

            




        };



        return (
            <Fragment>

                <Container fluid={true} className="Bgcolor text-center" >
                    <h1 className="serviceMainTitle Name text-center p-2"> Our Team</h1>
                    <div className="bottom1 "  ></div>

                    <Slider {...settings}>

                        <div>


                            <Row className="text-center justify-content-center" >
                                <Col lg={6} md={6} sm={12}  >

                                    <img className="circleImg" src={team} />
                                    <h4 className="Name" >Nizar Damiriyye</h4>
                                    <p className="Description" >
                                        I'm Nizar Damiriyye. I'm a Computer Engineer & developer with a serious love for teaching
                                        I am a founder of Cearive Team Programming (C.T.P) and a Programmer & Instructor.
                                    </p>


                                </Col>


                            </Row>

                        </div>


                        <div>


                            <Row className="text-center justify-content-center" >
                                <Col lg={6} md={6} sm={12}  >

                                    <img className="circleImg" src={team} />
                                    <h4 className="Name" >Nizar Damiriyye</h4>
                                    <p className="Description" >
                                        I'm Nizar Damiriyye. I'm a Computer Engineer & developer with a serious love for teaching
                                        I am a founder of Cearive Team Programming (C.T.P) and a Programmer & Instructor.
                                    </p>


                                </Col>


                            </Row>

                        </div>


                        <div>


                            <Row className="text-center justify-content-center" >
                                <Col lg={6} md={6} sm={12}  >

                                    <img className="circleImg" src={team} />
                                    <h4 className="Name" >Nizar Damiriyye</h4>
                                    <p className="Description" >
                                        I'm Nizar Damiriyye. I'm a Computer Engineer & developer with a serious love for teaching
                                        I am a founder of Cearive Team Programming (C.T.P) and a Programmer & Instructor.
                                    </p>


                                </Col>


                            </Row>

                        </div>


                        <div>


                        <Row className="text-center justify-content-center" >
                            <Col lg={6} md={6} sm={12}  >

                                <img className="circleImg" src={team} />
                                <h4 className="Name" >Nizar Damiriyye</h4>
                                <p className="Description" >
                                    I'm Nizar Damiriyye. I'm a Computer Engineer & developer with a serious love for teaching
                                    I am a founder of Cearive Team Programming (C.T.P) and a Programmer & Instructor.
                                </p>


                            </Col>


                        </Row>

                    </div>


                    <div>


                        <Row className="text-center justify-content-center" >
                            <Col lg={6} md={6} sm={12}  >

                                <img className="circleImg" src={team} />
                                <h4 className="Name" >Nizar Damiriyye</h4>
                                <p className="Description" >
                                    I'm Nizar Damiriyye. I'm a Computer Engineer & developer with a serious love for teaching
                                    I am a founder of Cearive Team Programming (C.T.P) and a Programmer & Instructor.
                                </p>


                            </Col>


                        </Row>

                    </div>



                    </Slider>

                </Container>


            </Fragment>

        )
    }
}

export default Team
