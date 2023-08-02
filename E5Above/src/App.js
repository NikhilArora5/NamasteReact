 
    import React from "react"
    import  ReactDOM  from "react-dom/client"
    import Header from "./components/Header"
    import Body from "./components/Body"

    import { createBrowserRouter } from "react-router-dom"


const AppLayout=()=>{
    return (
          <div className="root">
            <Header/>
            <Body/>
        </div>
    )
      
    
}

const appRouter=createBrowserRouter()

const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)