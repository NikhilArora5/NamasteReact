import  {LOGO_URL}  from "../utils/constants"
import { useState ,useEffect} from "react"
import { Link } from "react-router-dom"
import useOnlineStaus from "../utils/customHooks/useOnlineStatus"

// common classes

let li="mx-4"


const Header=()=>{
    const [loginBtn,setLoginBtn]=useState("Login")
    useEffect(()=>{
        console.log("----useffect called after header------------")
    },[loginBtn])

    

    const onlineStatus=useOnlineStaus()
    console.log("-------Header Component Rendered--------")
    return ( 
    
    <div className="header flex bg-pink-50 p-8 items-start justify-between">
  
      <div className="logo-container flex items-center justify-evenly">
      <img className="logo w-[250px] rounded-lg" src= {LOGO_URL}/>
      </div>
  
      <div className="nav-items text-lg mt-4">
          <ul className="flex items-center justify-evenly">

            <li>Online Status :{onlineStatus?"✔️":"🔴"}</li>
              <li className={li}><Link to={"/"} >Home</Link> </li>
              <li className={li}>  Restaurants  </li>
              <li className={li}> <Link to={"/about"}>About us</Link> </li>
              <li className={li}> <Link to={"/contact"}>Contact</Link> </li>
              <li className={li}> <Link to={"/grocery"}>Grocery</Link> </li>
           
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