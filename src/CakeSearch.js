import  axios from "axios"
import { useEffect, useState } from 'react'
import Card from './Card'


function CakeSearch(props){

  const queryString = require('query-string');
  var parsed = queryString.parse(props.location.search);
  let searchtext =parsed.cakes
 

    var[searchcakes,setCakes]=useState()
    //var searchcakeurl="https://apibyashu.herokuapp.com/api/searchcakes?q=mango"

   var searchcakeurl="https://apifromashu.herokuapp.com/api/searchcakes?q="+searchtext
 useEffect(()=>{
  axios({
    method:"get",
    url:searchcakeurl
  }).then((response)=>{
    console.log("response from all cake api",response.data.data)
    setCakes(response.data.data)
},(error)=>{
    console.log("Error from all cake api",error)
})
},[])


    return(

        <div className="container">
          <div className="row"> 
          {searchcakes?.length>0 ? searchcakes.map((each,index)=>{
             return <Card countrydata={each} key={index} /> 
          }):<div>NO result found</div>}
          </div>
       </div>
        

     /*  
      <div>

      
        <div>     {searchcakes?.length>0 && searchcakes.map((each,index)=>{
          return <Card countrydata={each} key={index} />
        })} </div>
        
   
    </div> */
    )


}
 export default CakeSearch
