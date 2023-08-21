import RestaurantCard from "./RestaurantCard"
import { resList } from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStaus from "../utils/customHooks/useOnlineStatus"
import RestaurantCardPromoted from "./RestaurantCardPromoted"

let RestaurantCardPromoted2=RestaurantCardPromoted(RestaurantCard)





const Body=()=>{

  useEffect(()=>{
   
    fetchData()




  },[])


  const [restArray,setRestArray]=useState([])
  const [filteredRestData,setFilteredRestData]=useState([])
  const [searchText,setSearchText]=useState("")


  

  const fetchData=async()=>{
     let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6790976&lng=76.84398709999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json=await data.json()
    console.log("Json--------------------",json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    let listData=json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   if(listData) {
    setRestArray(listData)
    setFilteredRestData(listData)
  }

    }



  const Arr=useState(resList)
 


// THIS IS KNOWN AS CONDITIONAL REDERING


const onlineStatus=useOnlineStaus()

if(!onlineStatus){

  return <h1>Looks like you are offline please internet connection !!</h1>
}

    return restArray.length==0?<Shimmer/>:(
        <div className="body"style={   { backgroundColor: "#f0f0f0f"}  } >
         <div className="search" >
        



           <input
          type="text"
          placeholder="Search Restaurant"
          onChange={(e)=>(    setSearchText(e.target.value))}
          value={searchText}
          />

         <button  onClick={()=>{

          let filteredRest=restArray.filter((rest)=>(rest.info.name.toLowerCase().includes(searchText.toLowerCase())))

          setFilteredRestData(filteredRest)

         }} >Search</button>
         </div>

         <button className="filter-btn" 
         
         onClick={()=>{
          console.log("resList Earl",resList.length)
          let filteredRest=restArray.filter((rest)=>(rest.info.avgRating > 4) )


          // setRestArray(filteredRest)
          setFilteredRestData(filteredRest)

          console.log("resList",resList.length)

          
         }} >
          Top Rated Restaurants</button>

         <div className="res-container">

          {filteredRestData.map((rest)=>(
            
           <Link to={`/restaurants/${rest.info.id}`} key={rest.info.id}> 

           
           {rest.info.veg?   <RestaurantCardPromoted2  resData={rest.info} />: <RestaurantCard resData={rest.info} /> }
        
          


            </Link> 
           
          )
          
          )}
           
        
         </div>
        </div>
    )
}


export default Body