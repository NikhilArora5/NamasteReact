import React from 'react'

const CartSummary = (props) => {
  let {totalPrice}=props
  console.log("---------totalPrice in summary",totalPrice)
  let name="Nikhl"
  return (
    

<div className="rounded-lg border bg-white p-6 shadow-md">

  <div className='mb-2 flex justify-between'>
      <form  className='mb-2 flex justify-between'>

       
          <label>Name</label>
          <input
            value={name}
            type='text'
          />
      
      </form>

  </div>
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">₹{totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">₹4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">₹{Number(totalPrice+4.99).toFixed(2)}</p>
            <p className="text-sm text-gray-700">including Gst</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
      

  )
}

export default CartSummary
