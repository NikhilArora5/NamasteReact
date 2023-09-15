import React from 'react'
import { useMemo,useState } from 'react';

const Demo = () => {
console.log("Demo component renders--")
    const [calValue,setCalValue]=useState(0)
    const [dark,setDark]=useState(false)
    function isPrime(num) {
        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
           return false;
          }
        }
        return true;
       }
    function nThPrime(n)
{
    console.log("---nThPrime runs------")
    let i=2;
     
    while(n>0)
    {
        // each time if a prime number found decrease n
        if(isPrime(i))
          n--;
        
        i++;  //increase the integer to go ahead
    }
    i-=1; // since decrement of k is being done before
          //Increment of i , so i should be decreased by 1
   console.log("-----------i",i)
    setCalValue(i)
    return i;
}


  return (
    <div className='border-2 border-gray-600' >
            <h1 className='my-4'>Demo Page</h1>
            <div className='flex p-2 m-2 items-center'>
            <input
        className='border-2 border-blue-400 p-2 mt-4'
            type='number'
            onChange={(e)=>nThPrime(e.target.value)}
            // value={calValue}
        />

        <h2>Value : {calValue}</h2>
            </div>
       
        <button onClick={()=>setDark(!dark)}> Toggle</button>
    
    </div>
  )
}

export default Demo