import  {LOGO_URL}  from "../utils/constants"
import { useState ,useEffect} from "react"
import { Link } from "react-router-dom"
import useOnlineStaus from "../utils/customHooks/useOnlineStatus"

import userContext from "../utils/context/userContext"

import { useContext } from "react"
import {  useSelector } from "react-redux/es/hooks/useSelector"
import { userLogout } from "../Api/auth"
// common classes
let li="mx-4"


const Header=()=>{
    const [loginBtn,setLoginBtn]=useState("Login")
    const {loggedInUser,isLoggedIn,setIsLoggedIn}=useContext(userContext)

    const cartItems=useSelector((store)=>(store.cart.items))

    



useEffect(()=>{
  // console.log("----useffect called after header------------")
},[loginBtn])



    const onlineStatus=useOnlineStaus()
    const auth=async()=>{
        let userLogout()
    }
    return ( 
    
    <div className="header flex bg-pink-50 px-8 py-6 items-start justify-between">
  
      <div className="logo-container flex items-center justify-evenly">
      <img className="logo w-[150px] rounded-lg" src= {LOGO_URL}/>
      </div>
  
      <div className="nav-items text-lg mt-4">
          <ul className="flex items-center justify-evenly">

            <li>Online Status :{onlineStatus?"✔️":"🔴"}</li>
              <li className={li}><Link to={"/"} >Home</Link> </li>
              <li className={li}>  Restaurants  </li>
              <li className={li}> <Link to={"/about"}>About us</Link> </li>
              <li className={li}> <Link to={"/contact"}>Contact</Link> </li>
              <li className={li}> <Link to={"/grocery"}>Grocery</Link> </li>
           
              <li  className= "font-bold">  <Link to={"/cart"}>Cart({cartItems.length})</Link></li>
              {isLoggedIn?<li  className={li}>{loggedInUser}</li>:""}
              <button className="login-Btn" 
              onClick={()=>(setIsLoggedIn(!isLo))}>
                <Link to={"/login"}> {isLoggedIn?"Logout":"Login"}</Link>
               
                
                </button>
          </ul>
      </div>
  
      </div>)
  }

  
  export default Header