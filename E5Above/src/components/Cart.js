import React from 'react'
import { CDN_URL } from '../utils/constants'

import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../Redux/slices/cartSlice'
import { UseSelector } from 'react-redux/es/hooks/useSelector'
import { useState } from 'react'
import {  useSelector } from "react-redux/es/hooks/useSelector"
import ItemList from './ItemList'
const Cart = () => {
const cartItems=useSelector((store)=>(store.cart.items))
const dispatch = useDispatch();

const handleClearCart = () => {
  dispatch(clearCart());
};

console.log("-----cartItems------",cartItems)
return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 ? (
          <h1> Cart is empty. Add Items to the cart!</h1>
        ): <ItemList items={cartItems} />}
       
      </div>
    </div>
  );
//   return (
//     <div className='w-1/2' >
        
//         <h3>Cart</h3>

//         {cartItems.map((item)=>{
//             return(
//                 <div className='text-left m-2 border-b-2 border-gray-300 py-6 flex justify-between'>
//                 <div className='w-9/12'>
//                 <h2>{item.name}</h2>
//                 <h2>{item.price}</h2>
    
//                 </div>
//                 <div className='3/12'>
//                     <img src={CDN_URL+item.imageId}/>
//                 </div>
//                 </div>
               
//             )
           
//         })}
        
       // </div>
 // )
}

export default Cart