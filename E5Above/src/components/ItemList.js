import React from 'react'
import { CDN_URL } from '../utils/constants'

import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../Redux/slices/cartSlice'


let {addItem,removeItem,clearCart}=cartSliceActions

const ItemList = (props) => {
  let {item}=props
  
  let dispatch=useDispatch()

   const   handleAddItem=(item)=>{
      console.log("-Item in add--------",item)
      dispatch(addItem(item))
   }


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
          <button className='absolute bg-black text-white p-2 text-sm rounded-md'
            // onClick={handleAddItem}
            // onClick={handleAddItem(item)}
            onClick={()=>(handleAddItem(item.card.info))}
          >  Add +</button>
        <img className=' rounded-md' src={CDN_URL+item?.card?.info.imageId} alt={item?.card?.info.name+" image"}/>
        </div>
      
    </div>
  )
}

export default ItemList
