 
    import React from "react"
    import  ReactDOM  from "react-dom/client"
    







const ReactElement=React.createElement("h1",{},"H1 with React.CreateElement")


// React Element
 


// React Functional Component

// // syntax-2
// const HeadingComponent2=()=>{
// return <h1>Functianal Component Heading</h1>

// }


const number =100
// syntax-1
const HeadingComponent=()=>(
    <div>
        {
            jsxHeading
            // console.log("-------------XYZ-----","XYZ")
            
        }
        {Title()}
         <Title/>
         <Title></Title>
    <h1>Functional Component Heading</h1>

    </div>
    
    )


const Title=()=>(<h1>
    Title Component inside Heading Component
    </h1>)
    
const jsxHeading=(<h1>
    {/* <Title/> */}
    Jsx Heading
    </h1>)









const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)