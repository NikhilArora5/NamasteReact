import {CDN_URL} from "../utils/constants"


const RestaurantCard=(props)=>{
    const {name,cuisine,rating}=props
        return (
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://th.bing.com/th/id/R.5ff9c57dcd7405f38eda737bc5be9e1c?rik=mTQ%2ff61ou%2bKfmA&riu=http%3a%2f%2fwww.wallpaperup.com%2fuploads%2fwallpapers%2f2015%2f04%2f11%2f659101%2f5ff9c57dcd7405f38eda737bc5be9e1c.jpg&ehk=VJlvinFd1DVy3g53p5BuOjf2Nk2ewnvWL1cQ78Ga9uQ%3d&risl=&pid=ImgRaw&r=0" />
            <h3>{name}</h3>
             <h4>{cuisine}</h4>
             <h4>{rating}</h4>
             <h4>Delivery :35 Minutes</h4>



        </div>
    )
}

export default RestaurantCard