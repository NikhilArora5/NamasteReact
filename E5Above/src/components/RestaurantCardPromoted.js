import React from "react"
import RestaurantCard from "./RestaurantCard"


const RestaurantCardPromoted=(RestaurantCard)=>(

    (props)=>{

           return(
            
           <> 
          <label>100% Veg</label>
           <RestaurantCardPromoted {...props}></RestaurantCardPromoted> 
      </>
               
                           
            
            
           )
   }


)

export default RestaurantCardPromoted