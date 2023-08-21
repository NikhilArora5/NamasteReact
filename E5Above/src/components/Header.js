import  {LOGO_URL}  from "../utils/constants"
import { useState ,useEffect} from "react"
import { Link } from "react-router-dom"
import useOnlineStaus from "../utils/customHooks/useOnlineStatus"
const Header=()=>{
    const [loginBtn,setLoginBtn]=useState("Login")
    useEffect(()=>{
        console.log("----useffect called after header------------")
    },[loginBtn])

    

    const onlineStatus=useOnlineStaus()
    console.log("-------Header Component Rendered--------")
    return ( <div className="header">
  
      <div className="logo-container">
      <img className="logo" src= {LOGO_URL}/>
      </div>
  
      <div className="nav-items">
          <ul>

            <li>Online Status :{onlineStatus?"✔️":"🔴"}</li>
              <li><Link to={"/"} >Home</Link> </li>
              <li>  Restaurants  </li>
              <li> <Link to={"/about"}>About us</Link> </li>
              <li> <Link to={"/contact"}>Contact</Link> </li>
              <li> <Link to={"/grocery"}>Grocery</Link> </li>
           
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