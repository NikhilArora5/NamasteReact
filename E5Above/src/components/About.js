import React from 'react'
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
      <h1>About Page...............</h1>

    <UserClass name={"Nikhil Arora As Props"} />
    </div>
  )
}

export default About
