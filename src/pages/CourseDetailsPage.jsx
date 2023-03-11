import React, { Component ,Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigtion/TopNavigation'
import TopPage from './TopPage'
import CourseDetails from '../components/CourseDetails/CourseDetails'

export class CourseDetailsPage extends Component {
     componentDidMount(){
          window.scroll(0,0)
      }

     render() {
          return (
              <Fragment>
              <TopNavigation/>
              <TopPage pagetitle=" Course details " />
              <CourseDetails/>
              <Footer/>

              
              </Fragment>
          )
     }
}

export default CourseDetailsPage
