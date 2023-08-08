import React from "react"


class UserClass extends React.Component{

    constructor(props){

        super(props)

       
        this.state={
            userInfo:{
                login:"",
                avatar_url:""
            }
        }

        //  console.log( this.props.name+"Child Contructour called")
    }

   async componentDidMount(){

        // console.log(this.props.name+"Child component Did Mount")
        const data= await fetch(" https://api.github.com/users/NikhilArora5")

        let json=await data.json()
        console.log("JSON USER API",json)

        if(json) this.setState({userInfo:json})
    }

    render(){
        //  console.log(this.props.name+"Child Rendering  called")
        const {avatar_url,login,html_url}=this.state.userInfo

        return (

            <div className="user-card">
              {/* <img src={avatar_url}/> */}
                <h2>{login}</h2>
                <a target="_blank" href={html_url} > Github  </a>

                
               
                

            </div>
        )
    }

}

export default UserClass