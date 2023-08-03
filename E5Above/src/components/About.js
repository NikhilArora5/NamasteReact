import React from 'react'
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"

const About = () => {
  return (
    <div>
      <h1>About Page...............</h1>
    <Outlet/>
    </div>
  )
}

export default About
