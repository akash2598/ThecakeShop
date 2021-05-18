//import logo from './logo.svg';
import './App.css';
import CakeDetail from './CakeDetail';
import NavBar from './NavBar.js'

import SignUp from './Signup.js'
import Checkout from './Checkout.js'
import Home from './Home.js'
import  Login from './Login.js'
import  PageNotFound from './PageNotFound'
//import   cakes  from './data.js'
import React, { useEffect, useState,Suspense} from 'react';

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import CakeSearch from './CakeSearch';
import Cart from './Cart';
import axios from 'axios';
import { connect } from 'react-redux';
import ErrorBoundry from './ErrorBoundry'
//import CakeDetail from './CakeDetail';


var SuspendedAdmin=React.lazy(()=>import('./Admin'))

function App(props) {
  var cakes=[]
 if(localStorage.token && !props.user){
   var token=localStorage.token
   //console.log("already log in")
   axios({
     method:'get',
     url:"https://apifromashu.herokuapp.com/api/getuserdetails",
     headers:{
       authtoken:token
     }

   }).then((response)=>{
       console.log(response.data.data)
        props.dispatch({
          type:"ALREADY_LOG_IN",
          payload:response.data.data
        })
        
        
   },(error)=>{
        console.log("error",error)
   })

   axios({
    url:"https://apifromashu.herokuapp.com/api/cakecart",
    method:'post',
    headers:{
      authtoken:token
    },
    data:{}
  }).then((response)=>{
    console.log("cake data",response.data)
    cakes= response.data.data
    props.dispatch({
      type:"CARTDATA",
      payload:{cakes}
   }) 
    console.log("cakes is ",cakes) 
  },(error)=>{
    console.log(error)
  })
  

  

 }

 
 



  
 


  return (
    
    <div className="App">
     <ErrorBoundry>
          
     
     <Router>
      <NavBar  />
      <br/> 
       <div>
         <Switch>
         <Route path="/" exact component={Home}/>
        { !localStorage.token && <Route path="/login" exact component={Login}/>}
          
        
         
         
         <Route path="/signup" exact component={SignUp}/>
         <Route path="/search/:text" exact component={CakeSearch}/>
         <Route path="/cake/:cakeid" exact component={CakeDetail}/>
         <Route path="/admin" exact>
         <Suspense fallback={<div>Loading...</div>}>
           <SuspendedAdmin/>
         </Suspense>
         </Route>
         
         
          
         { localStorage.token && <Route path="/cart" exact component={Cart}/>}
           
         { localStorage.token && <Route path="/checkout"  component={Checkout}/>}
          
          
         
         
        
        
         
          

        
        
         <Route path="/*" >
           <Redirect to="/"></Redirect>
         </Route> 
         </Switch>
       </div>
     </Router>
     </ErrorBoundry>
     
      
    </div> 

    
  );
}

export default connect(function(state,props){
return{
  user:state?.user,
  islogin :state["isloggedin"]
}
})(App);
