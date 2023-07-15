 
    import React from "react"
    import  ReactDOM  from "react-dom"
    
    const h1=React.createElement("h1",{ id:"h1"},"I am an Nested h1 tag")
     const h2=React.createElement("h2",{ id:"h2"},"I am an sibling h2 tag")


    const child1=React.createElement("div",{ id:"child1"},     [h1, h2]   )
    const child2=React.createElement("div",{ id:"child2"},     [h1, h2]   )
   

    const parent=React.createElement("div",{ id:"parent"},  [child1,child2]   )


    const root=ReactDOM.createRoot(document.getElementById("root"))


    // heading is an js Object not an h1 Tag yep
    // console.log("Heading",heading
    console.log("parent",parent)
    

    // root.renderis basically repsonisble and it takes an object and convert and make it into an html h1 tag
    root.render(parent)

    // root.render()


    /*
    creating a Nested Html structure using React.createElement

    <div class="parent" > 

             <div class="child" >
             
                <h1> I am an h tag </h1>
                <h2> I am an sibling  h2 tag </h1>

            <div/>
    
    <div/>

    */



