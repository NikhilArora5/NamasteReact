import React from "react"


class UserClass extends React.Component{

    constructor(props){

        super(props)

       
        this.state={
            count:0
        }

         console.log("Child Contructour called")
    }

    render(){
         console.log("Child Rendering  called")
        const {count}=this.state

        return (

            <div className="user-card">
                <h3>User Class</h3>
                <h2>{this.state.name}</h2>
                
                <h2>Count :{count}</h2>  <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }} >Inc Count</button>
                
                

            </div>
        )
    }

}

export default UserClass