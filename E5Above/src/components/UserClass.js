import React from "react"


class UserClass extends React.Component{

    constructor(props){

        super(props)

        console.log("Receiving Props in classBased",props)
    }

    render(){

        return (

            <div className="user-card">
                <h3>User Class</h3>
                <h2>{this.props.name}</h2>
                

            </div>
        )
    }

}

export default UserClass