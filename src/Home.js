import NavBar from './NavBar.js'
import Carousel from './carousel.js'
import Card from './Card'
import React, { useEffect, useState ,Suspense} from 'react';
import CakeDetail from './CakeDetail.js'
import axios from 'axios';
import CakeSearch from './CakeSearch.js'
import  Login from './Login.js'
import SignUp from './Signup.js'
import Loader from "react-loader-spinner";

import { connect } from 'react-redux';


function Home (props){

  
  var baseurl = process.env.REACT_APP_BASE_URL
  
   var [isrun,setRun]=useState(true)
    var[cakes,setCakes]=useState({})
    var allcakeurl=baseurl+"/api/allcakes"
   // console.log("base url and complete url",baseurl)
    useEffect(()=>{
      axios({
    method:"get",
    url:allcakeurl
    }).then((response)=>{
    //console.log("response from all cake api",response.data.data)
    setCakes(response.data.data)
    setRun(false)
      },(error)=>{
   // console.log("Error from all cake api",error)
 })
 },[])


 

    return(
      
        <div className="Home">
        
      

     
      
        <Carousel></Carousel>
        <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        visible={isrun}
      />

      
       <div className="row justify-content-center "  >
        
       
      {cakes?.length>0 && cakes.map((each,index)=>{
      
        return(<Card  countrydata={each} key={index} />)
      })}
      </div>
      
     
        </div>

    )
} 


export default connect(function(state,props){
 // console.log(".....Login state",state)
 
    return{    
      isloggedin:state["isloggedin"]
    }
    
    
    
    
  
})(Home);
//