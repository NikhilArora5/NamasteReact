import ItemList from "./ItemList"
import { useState } from "react"


function RestaurantCategory(props){

    console.log("-props",props)

  
    const handleAccorion=()=>{
     
    }
    let {data,showItems}=props
    return <>
        <div className="mt-2 w-1/2  mx-auto bg-gray-50 flex flex-col justify-between p-4 my-4 shadow-lg cursor-pointer">
          <div className="flex justify-between mb-2" onClick={handleAccorion}>
            <span className="font-bold text-lg text-gray-800">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
          </div>
          {/* {Accordion Body} */}

          {data.itemCards.map((item)=>{
            return <div>
             {showItems?<ItemList key={item.card.info.id} item={item}></ItemList>:<></>} 
            </div>
          })}


        </div>
    </>
}


export default RestaurantCategory