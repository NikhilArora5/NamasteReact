import {CDN_URL} from "../utils/constants"
import { Link } from "react-router-dom"


const RestaurantCard=(props)=>{
    // const {name,cuisine,rating}=props
    // console.log("Props-------------",props)
    const {resData}=props
        return (
        <div className="res-card"  > 
            <img 
            className="res-logo"
            alt="res-logo"
            src={CDN_URL+resData.cloudinaryImageId} />
            <h3>{resData.name}</h3>
             <h4>{resData.cuisines.join(" ,")}</h4>
             <h4>{resData.avgRatingString}</h4>
             <h4>{resData.costForTwo}</h4>
             <h4> DeliveryTime:{resData.sla.slaString }</h4>
            



        </div>
    )
}





export const RestaurantCardPromoted=(RestaurantCard)=>(

     ()=>{

            return(

                <RestaurantCard></RestaurantCard>
            )
    }


)

export default RestaurantCard