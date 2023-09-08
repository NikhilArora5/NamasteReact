import React from 'react'

import { CDN_URL } from '../utils/constants'

const ItemList = (props) => {
    // console.log("--------Props ITEMlist",props)
    let {item}=props
    console.log("-------item--",item)
  return (
    <div className='text-left m-2 border-b-2 border-gray-300 py-6 flex justify-between'>
        <div className='w-10/12 flex  flex-col justify-between my-2 '>
            <div>
            <span className='text-lg mr-2'>{item?.card?.info?.name}</span> 
            <span className='text-lg'>- ₹: {item?.card?.info?.price/100}</span> 
           
            </div>

        <p className='text-sm my-2 text-gray-500'>
        {item?.card?.info?.description}
        </p>
        </div>

       
 
        <div className='w-2/12'>
        <img className=' rounded-md' src={CDN_URL+item?.card?.info.imageId} alt={item?.card?.info.name+" image"}/>
        </div>
      
    </div>
  )
}

export default ItemList
