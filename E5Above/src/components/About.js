import React from 'react'
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import UserClass from './UserClass'
import { Component } from 'react'
class About extends Component{

  constructor(props){

    super(props)

    console.log("Parent Contructour called")
  }

  render(){
    console.log("Parent Rendering  called")
    return (
      <div>
        <h1>About class comp Page...............</h1>
  
      <UserClass name={"Nikhil Arora As Props"} />
      </div>
    )
  }
} 



export default About
