


function RestaurantCategory(props){

    console.log("-props",props)
    let {data}=props
    return <>
        <div className="mt-2">
          <div className="w-1/2  mx-auto bg-gray-50 flex justify-between p-4 my-4 shadow-lg cursor-pointer">
            <span className="font-bold text-lg text-gray-700">{data.title}</span>
            <span>🔽</span>
          </div>
        </div>
    </>
}


export default RestaurantCategory