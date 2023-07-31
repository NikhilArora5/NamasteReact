import RestaurantCard from "./RestaurantCard"
import { resList } from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"




const Body=()=>{

  useEffect(()=>{
   
    fetchData()


  },[])


  const [restArray,setRestArray]=useState([])
  const [searchText,setSearchText]=useState("")

  console.log("---------BODY RENDERED-----------")
  

  const fetchData=async()=>{
     let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6425496&lng=76.8173359&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    // );
      const json=await data.json()
    console.log("Json--------------------",json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    let listData=json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setRestArray(listData)

    }

  // 1. Destructure on the Fly  Basic Array Destructure
 


  // 2. Same array Destructur
  const Arr=useState(resList)
  // const [restArray,setRestArray]=Arr

  // console.log("-------ARRAY---",Arr)

  // 3.
// const restArray=Arr[0]
// const setRestArray=Arr[1]



// THIS IS KNOWN AS CONDITIONAL REDERING

    return restArray.length==0?<Shimmer/>:(
        <div className="body"style={   { backgroundColor: "#f0f0f0f"}  } >
         <div className="search" >
         {/* <form
        
         >
          <input
          type="text"
          placeholder="Search Restaurant"
          onChange={(e)=>(console.log("e",e.target.value))}
          />
          
          
         </form> */}



           <input
          type="text"
          placeholder="Search Restaurant"
          onChange={(e)=>(    setSearchText(e.target.value))}
          value={searchText}
          />

         <button  >Search</button>
         </div>

         <button className="filter-btn" 
         
         onClick={()=>{
          console.log("resList Earl",resList.length)
          let filteredRest=resList.filter((rest)=>(rest.info.avgRating > 4)
            // console.log("rest.info.avgRating",rest.info.avgRating)
            // console.log("rest.infoboolean",Boolean(rest.info.avgRating > 4))

          )


          setRestArray(filteredRest)

          console.log("resList",resList.length)

          
         }} >
          Top Rated Restaurants</button>

         <div className="res-container">

          {restArray.map((rest)=>(
           
            <RestaurantCard resData={rest.info} key={rest.info.id}/>
            // console.log('---------Rest------',rest)
          )
          
          )}
           
        
         </div>
        </div>
    )
}


export default Body