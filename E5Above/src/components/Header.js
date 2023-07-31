import  {LOGO_URL}  from "../utils/constants"
import { useState } from "react"

const Header=()=>{
    const [loginBtn,setLoginBtn]=useState("Login")
    console.log("-------Header Component Rendered--------")
    return ( <div className="header">
  
      <div className="logo-container">
      <img className="logo" src= {LOGO_URL}/>
      </div>
  
      <div className="nav-items">
          <ul>
              <li> Home</li>
              <li> Restaurants  </li>
              <li> About us</li>
              <li> Cart</li>
              <button className="login-Btn" 
              onClick={()=>(loginBtn=="Login"?setLoginBtn("Logout"):setLoginBtn("Login"))}>
                
                {loginBtn}
                
                </button>
          </ul>
      </div>
  
      </div>)
  }

  
  export default Header