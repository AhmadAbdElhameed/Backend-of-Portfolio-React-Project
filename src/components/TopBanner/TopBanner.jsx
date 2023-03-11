import React, { Component, Fragment } from 'react'

import '../../asset/css/custom.css'
import {Container,Row , Col ,Button} from 'react-bootstrap'
import '../../asset/css/Bootstrap.min.css'
import AppUrl from "../../AppUrl/AppUrl"
import RestApi from "../../AppUrl/RestApi"





class TopBanner extends Component {

    constructor(){
        super();
        this.state={
            title:"",
            subtitle:"",

        }
    }

    componentDidMount(){
        RestApi.GetRequest(AppUrl.home).then(result=>{
            this.setState({title:result[0]['home_title'], subtitle:result[0]['home_subtitle']})
        })
    }

     render() {
          return (
               <Fragment>

               <Container fluid={true} className="topFixedBanner  p-0 "  >

               <div className="topBannerOverly">

               <Container className="topContent"  >

               <Row>

               <Col className="text-center"  >

               <h1  className="topTitle" >  {this.state.title}  </h1>
               <h4 className="topSubTitle">  {this.state.subtitle} </h4>
               <Button variant="primary">More</Button>


               </Col>


               </Row>


               </Container>






               </div>












               </Container>








               </Fragment>
          )
     }
}

export default TopBanner
