import React from 'react'
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import UserClass from './UserClass'
import { Component } from 'react'
class About extends Component{

  constructor(props){

    super(props)

    // console.log("Parent Contructour called")
  }
  
  componentDidMount(){

    // console.log("Parent component Did Mount")
}

  render(){
    // console.log("Parent Rendering  called")
    return (
      <div>
        <h1>About class comp Page...............</h1>
  
      <UserClass name={"First "} />
      </div>
    )
  }
} 



export default About
