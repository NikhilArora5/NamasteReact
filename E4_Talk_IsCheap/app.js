 
    import React from "react"
    import  ReactDOM  from "react-dom/client"
    







const ReactElement=React.createElement("h1",{},"H1 with React.CreateElement")

/*
#Header
    -Logo
    -Nav items
#Body
    -Search Bar
    -RestaurantContainer
        --RestaurantCard
            *img,name
            *rating,cuisine,delivery time

#Footer
    -Copyright
    -Links
    -Adress
    -Contact
*/

const styleObj={
    backgroundColor: "#f0f0f0f"
}

const Body=()=>{
    return (
        <div className="body"style={   { backgroundColor: "#f0f0f0f"}  } >
         <div className="search">Search </div>

         <div className="res-container">
           <RestaurantCard/>
         </div>
        </div>
    )
}

const RestaurantCard=()=>{
    return (
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src="https://th.bing.com/th/id/R.5ff9c57dcd7405f38eda737bc5be9e1c?rik=mTQ%2ff61ou%2bKfmA&riu=http%3a%2f%2fwww.wallpaperup.com%2fuploads%2fwallpapers%2f2015%2f04%2f11%2f659101%2f5ff9c57dcd7405f38eda737bc5be9e1c.jpg&ehk=VJlvinFd1DVy3g53p5BuOjf2Nk2ewnvWL1cQ78Ga9uQ%3d&risl=&pid=ImgRaw&r=0" />
            <h3>Meghana Foods</h3>
             <h4>North India ,chineese,Asian</h4>
             <h4>4.5 Stars</h4>
             <h4>Delivery :35 Minutes</h4>



        </div>
    )
}

const Header=()=>{
  return ( <div className="header">

    <div className="logo-container">
    <img className="logo" src="https://img.freepik.com/premium-vector/tray-food-gourmet-address-location-pin-logo-design-app-icon-vector-template-concept-idea_537522-60.jpg?w=2000"/>
    </div>

    <div className="nav-items">
        <ul>
            <li> Home</li>
            <li> Restaurants  </li>
            <li> About us</li>
            <li> Cart</li>
        </ul>
    </div>

    </div>)
}

const AppLayout=()=>{
    return (
          <div className="root">
            <Header/>
            <Body/>
        </div>
    )
      
    
}




const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)