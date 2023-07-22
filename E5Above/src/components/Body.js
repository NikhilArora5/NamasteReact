import RestaurantCard from "./RestaurantCard"

const Body=()=>{
    return (
        <div className="body"style={   { backgroundColor: "#f0f0f0f"}  } >
         <div className="search">Search</div>

         <div className="res-container">
           <RestaurantCard name="KFC" cuisine="North India ,chineese,Asian" rating= "4.3"/>
           <RestaurantCard name="Brew Estate" cuisine="Mexican ,chineese,Asian" rating= "4.5"/>
         </div>
        </div>
    )
}


export default Body