import React, { Component, Fragment  } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../Chart/Chart.css'
import '../../asset/css/Bootstrap.min.css'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


 class Chart extends Component {

     constructor(){
          super();
          this.state={

               data:[
               {X:"C#" ,Y:100},
               {X:"C++" ,Y:45},
               {X:"C#" ,Y:100},
               {X:"C++" ,Y:45},
               {X:"C#" ,Y:100},
               {X:"C++" ,Y:45},
          
     
          
          ]


          }
     }



     
     render() {

          return (
               <Fragment>
                    <Container >
                         <h1 className=" text-center serviceMainTitle"> TECHNOLOGY USED</h1>
                         <div className="bottom"  ></div>
                         <Row>
                              <Col style={{ width:'50%', height:'300px' }}  lg={6} md={12} sm={12} >
                                   <h4 className="text-center">Experinces</h4>

                                   <ResponsiveContainer >
                                   <BarChart width={150} height={40} data={this.state.data}>

                                   <XAxis dataKey="X" />
                                   <Tooltip />

                                        <Bar dataKey="Y" fill="#8884d8" />
                                   </BarChart>
                                   </ResponsiveContainer>
                                
                                  
                              </Col>
                              <Col lg={6} md={12} sm={12} >
                                   <p className=" text-justify  chartDescription  ">
                                        Hi! I'm Nizar Damiriyye. I'm a Computer Engineer & developer with a serious love for teaching I am a founder of Cearive Team Programming (C.T.P) and a Programmer & Instructor.<br></br> <br></br>
                                        I am working online for the last 5 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. Cearive Team Programming exists to help you succeed in life.<br></br> <br></br>
                                        Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place. <br></br> <br></br>
                                   </p>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}
export default Chart
