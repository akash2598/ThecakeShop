
//class component with state feature to update page without affecting other component
import {Component} from "react"
import Loader from "react-loader-spinner";      
import axios from "axios"


class SignUp extends Component{

constructor(){
    super()
    this.state={
       isRun:false
    }
}

    user={}
        
  /* componentDidMount(){
        alert("mounted")
   } 

   componentDidUpdate(){
       alert("updated")
   } */

   getName=(event)=>{
    this.user.name = event.target.value
}

getEmail=(event)=>{
     this.user.email = event.target.value
}

getPassword=(event)=>{
    this.user.password=event.target.value
}

Register=()=>{
     if(!this.user.email || !this.user.password|| !this.user.name){
         this.setState({
             errorMessage:"Please fill details"
         })
     }
         else{
            this.setState({
                isRun:true
            })

            let apiurl="https://apifromashu.herokuapp.com/api/register"
            axios({
                url:apiurl,
                method:"post",
                data:this.user

            }).then((response)=>{
                console.log("response from api",response.data)
                this.setState({
                    isRun:false
                })
                this.setState({
                    errorMessage:response.data.message
                })
                
            },(error)=>{
                console.log("Error from api",error)
                this.setState({
                    isRun:false
                })
                this.setState({
                    errorMessage:error
                })
            })
           
         }
     }

     render(){
        return(
            <div className="shadow-lg p-3 mb-5 bg-light " style={{width:"50%" ,margin:"auto"}}>
                
                
                <div className="form-group">
                <label >Name</label><br/>
                <input type="text" class="form-control" placeholder="Enter Name" onChange={this.getName}></input><br/>
                
                <label >Email</label><br/>
                <input type="email" class="form-control" placeholder="Enter Email" onChange={this.getEmail}></input><br/>
                <label>Password</label><br/>
                <input type="password" class="form-control" placeholder="Enter Password" onChange={this.getPassword}></input><br/>
                <button onClick={this.Register} className="btn btn-primary">Register</button>

                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>
                <Loader
              type="ThreeDots"
              color="#00BFFF"
             height={100}
             width={100}
               visible={this.state.isRun}
          />
                </div>
    
            </div>
        )
     }

    
}



export default SignUp