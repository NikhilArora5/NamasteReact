import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constants'
import Shimmer from './Shimmer'
const RestaurantMenu = () => {
  let {resId} =useParams()
  // const [itemCards,setResMenu]=useState([])
  const [resInfo,setResInfo]=useState([])
  // console.log("------resId---",resId)

  useEffect(()=>{
   fetchMenu()
  },[])

  const fetchMenu=async()=>{
    let data=await fetch(MENU_API+resId)
    let json=await data.json()

    // console.log("-------------RES-MENU API JSON-----",json?.data?.cards[2]?.groupedCard?.cardGroupMap)

    

    if(json.data){
      
      setResInfo(json.data)
    
      console.log('------TOTAL DATA-------------',resInfo)
     
     
    }
   
   
  }

  if (resInfo==null || resInfo.length==0) return <Shimmer></Shimmer>
  console.log("resInfo",resInfo)
  let {name,cuisines,avgRating,cloudinaryImageId,costForTwo,isOpen}=resInfo?.cards[0]?.card?.card?.info
  let {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card

  console.log('------rest Details------------',resInfo?.cards[0]?.card?.card?.info)
  console.log("itemCards-----------",itemCards)



  return (
<>
<h1>{name}</h1>
<h2>{cuisines.join(", ")}</h2>
<h3> Cost For Two RS:{costForTwo/100}</h3>
{
    itemCards.map((item)=>(
      <div className='menu' key={item?.card?.info?.id}>
     
      <ul>
        <li>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100}</li>
      </ul>
    </div>
    ))
   }
</>
   
  )

  }
export default RestaurantMenu
