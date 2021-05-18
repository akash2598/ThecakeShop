import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import * as Icon from 'react-bootstrap-icons';
import {Badge} from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
function NavBar(props) {

  let [serchText,setSerchText]=useState()

  
  
/*
  let onLogin=()=>{
    props.setlogin(true)
}*/

let onLogout=()=>{
    //props.setlogin(false)
    //localStorage.token =""
    props.dispatch({
      type:"LOGOUT",

      

    })
   
    localStorage.removeItem('token')
}

let getText=(event)=>{
  
   setSerchText(event.target.value)
}

  useEffect(()=>{
    if(props.loginSuccess){
      toast.success("Login Success....")
     }
      
  },[props.loginSuccess])
    return (
      
      <div className="NavBar">
        <Toaster/>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <Link to="/"> <a class="navbar-brand" href="#">The Cake Shop</a> </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">

     {  props.user && <a class="nav-link" href="#">Welcome {props.user} <span class="sr-only">(current)</span></a>
     }

        
      </li>
     
     
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={getText}/>
     <Link to={'/search/search?cakes='+serchText}>
       <div className="shadow-sm "> <button className="btn btn-danger mr-1" ><Icon.Search   size={20} /> </button>
       </div>
       </Link> 
      
      
      {props.islogin ?
      <div>
        <Link to={'/cart'}> <Icon.Cart2 className="mr-2" size={30}/><span className="badge badge-light mr-1 " style={{color:"black",fontSize:"15px"}}>{props.cart?.length}</span></Link>
      <button onClick={onLogout} className="btn btn-danger mr-1">Logout</button> </div>:<Link to="/login"><button  className="btn btn-primary mr-1">Login</button></Link>}

    </form>
  </div>
</nav>
      </div>
    );
  }
  
  export default connect(function(state,props){
    
    return{
      user:state && state["user"]["name"],
      islogin :state && state["isloggedin"],
      cart:state?.cart,
      loginSuccess :state["loginSuccess"]
    }
  })(NavBar);