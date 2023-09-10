 
    import React ,{lazy,Suspense,useEffect, useState}from "react"
    import  ReactDOM  from "react-dom/client"
    import Header from "./components/Header"
    import Body from "./components/Body"

    import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
    import About from "./components/About"
    import Contact from "./components/Contact"
    import Error from "./components/Error"
    import RestaurantMenu from "./components/RestaurantMenu"
 import Login from "./components/Login"
const Grocery=lazy(()=>import("./components/Grocery"))

import userContext from "./utils/context/userContext"




const AppLayout=()=>{
    const [userName,setUserName]=useState("")
    
    useEffect(()=>{
        // initialing hitting an api and getting user data
        let data={name:"David"}
        setUserName(data.name)
    },[])

    return (

        <userContext.Provider value={{loggedInUser:userName,setUserName}}>

          <div className="root">
            <Header/>
       `<Outlet></Outlet>`

        </div>
        </userContext.Provider>
    )
      
    
}

const appRouter=createBrowserRouter(
    [
        {
             path:"/",
             element:<AppLayout/>   ,
             children:[
                {
                    path:"/",
                    element:<Body/>   ,
                    
           },
                {
                    path:"/about",
                    element:<About/>   ,
                    
           },
               {
                    path:"/contact",
                    element:<Contact></Contact>
           },
               {
                    path:"/restaurants/:resId",
                    element:<RestaurantMenu></RestaurantMenu>
           },
               {
                    path:"/login",
                    element:<Login></Login>
           },
               {
                    path:"/grocery",
                    element:<Suspense fallback={
                         <h1>Grocery Page</h1>
                    } ><Grocery/></Suspense>
           },


             ],

             errorElement:<Error/>
             
    },
      

]
)

const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)