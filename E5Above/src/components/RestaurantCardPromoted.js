import React from "react"
import RestaurantCard from "./RestaurantCard"


const RestaurantCardPromoted=(RestaurantCard)=>(

    (props)=>{

           return(
            <>

                <label>100% Veg</label>
               <RestaurantCard {...props}></RestaurantCard>            
            </>
            
           )
   }


)

export default RestaurantCardPromoted