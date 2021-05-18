
  
import {useState,useEffect} from "react"
import validator from 'validator'
import axios from "axios"
import { Link ,withRouter} from "react-router-dom"
import { connect } from "react-redux"
import Loader from "react-loader-spinner";


//useEffec-for did mount didupdate
function Login(props){
    
     // var isrun=false;

      
     // var [isrun,setRun]=useState(false)
      var [error,setError]=useState() 
      var[users,setUser]=useState({})
      var user={} 

  

     let getEmail=function(event){
          
        if(!event.target.value){
            setError("Please fill email")
        }
       else{
        user.email = event.target.value
        setError("")
       }
        /*setUser({
            email:event.target.value,
            password:users.password
        }) */
     }

     let getPassword=function(event){
       
        if(!event.target.value){
            setError("Please fill password")
        }
        else{
        user.password = event.target.value
        setError("")
        }
      /*  setUser({
            email:users.email,
            password:event.target.value
        }) */
     }

     



    function login (){
          
            
            if(!user.email || !user.password){
                console.log(user.email)
                setError("Please fill all details")
                document.getElementById("email").value=""
                document.getElementById("password").value=""
               
               
                //call the method
              //  props.informlogin("AS")
                  
            }
            else
            {
              if (!validator.isEmail(user.email)){
                  setError("Enter valid Email")
                  document.getElementById("email").value=""
                  document.getElementById("password").value=""
              }
              else{

            
                props.dispatch({
                    type:"LOGIN",
                    payload:user
                })
              
                  
             /*
                setRun(true)

                let apiurl="https://apibyashu.herokuapp.com/api/login"
            axios({
                url:apiurl,
                method:"post",
                data:user

            }).then((response)=>{
                console.log("response from api",response.data)
               
                if(response.data.token){
                   
                    //route using code -rote add extra feat. to props of component
                    props.history.push("/")
                    setRun(false)
                    //localStorage.email=response.data.email
                    localStorage.token=response.data.token
                    //localStorage.name=response.data.name
                   // props.informlogin(localStorage.name)
                   console.log("...previous path",props.url)
                    props.dispatch({
                        type:"LOGIN",
                        payload:{email:response.data.email,name:response.data.name}
                    }) 
                }
                else{
                    setError(response.data.message)
                    setRun(false)
                }

               //props.informlogin(response.data.name)
            },(error)=>{
                console.log("Error from api",error)
                setError(error)
                setRun(false)
            })
                  */

 
         }
            
            }
     }

    return(
        <div style={{width:"50%" ,margin:"auto"}}>
                
         
        <div className="form-group">
           
        <label >Email</label><br/>
        <input class="form-control" name="email" id="email" placeholder="Enter Email" onChange={getEmail}></input><br/>
        {users.email}
        <label>Password</label><br/>
        <input class="form-control" name="password" id="password" type="password" placeholder="Enter Password" onChange={getPassword}></input><br/>
        {users.password}
       <button onClick={login} className="btn btn-primary">Login</button>
       <div style={{float:"left"}}>
       <Link to="/signup"> Not a user?</Link>
       </div>
       <div style={{float:"right"}}>
       <Link to="/forgotpassword"> Forgot Password ?</Link>
       </div>
        
       { props.loginerror ? <div style={{color:"red"}}>
            Invalid Creditinals
        </div> : 
         <div style={{color:"red"}}>{error} </div>
      }
        
       { props.isrun && <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        
      />}
        </div>

       

    </div>
    )
}

Login=withRouter(Login)
export default connect(function(state,props){
    console.log(".....Login state",state)
   
      return{
        isrun:state["isfetching"],
        loginerror: state["loginerror"],
        isloggedin:state["isloggedin"]
      }
      
      
      
      
    
  })(Login);
//
