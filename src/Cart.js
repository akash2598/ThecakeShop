import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from "react-loader-spinner";
function Cart(props){


  //
  var [isrun,setRun]=useState(false)

    let token=localStorage.token
    var[cakes,setCakes]=useState([])
    var cakecarturl="https://apifromashu.herokuapp.com/api/cakecart"
    var removecarturl="https://apifromashu.herokuapp.com/api/removecakefromcart"
  useEffect(()=>{
     
    axios({
        url:cakecarturl,
        method:'post',
        headers:{
          authtoken:token
        },
        data:{}
      }).then((response)=>{
        console.log("cake data",response.data)
        setCakes(response.data.data)
       /* props.dispatch({
          type:"CARTDATA",
          payload:response.data.data
       }) */
        console.log("cakes is ",cakes) 
      },(error)=>{
        console.log(error)
      })
      
   },[])

   let removeItem =(cakeemail,id)=>{
    setRun(true)
    let email,cakeid
    email=cakeemail
    cakeid=id

   
    
    axios({
      url:removecarturl,
      method:'post',
      headers:{
        authtoken:token
      },
      data:{email,
      cakeid}
      }).then((response)=>{
      console.log("cake remove data data",response.data)
      setRun(false)
      ////////
      axios({
        url:cakecarturl,
        method:'post',
        headers:{
          authtoken:token
        },
        data:{}
      }).then((response)=>{
        setCakes(response.data.data)
        /* props.dispatch({
          type:"CARTDATA",
          payload:response.data.data
          
        })*/
      },(error)=>{
        console.log(error)
      })


      ////
      
     
      
      console.log("cakes is ",cakes) 
    },(error)=>{
      console.log(error)
    })  

    

   }

 
   let setReduxData=()=>{
    var total=0
    cakes?.length>0 && cakes.map((each,index)=>{
      total=total+each.price
    })
    props.dispatch({
      type:"CARTDATA",
      payload:{cakes,total}
      
    })
   }
  

    return (
        <div>
       { cakes?.length >0 ?  
       
       <div>
       <h1>My cart</h1>
    {cakes.map((object,index)=>(
     


 <div class="container mt-5 mb-5">
  <div class="d-flex justify-content-center row">
     <div class="col-md-8">
    <div class="p-2">
        
    </div>
    <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div class="mr-1"><img class="rounded" src={object.image} width="70"/></div>
        <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">{object.name}</span>
           
        </div>
       
       
      
        <div class="d-flex flex-row align-items-center qty"><i class="fa fa-minus text-danger"></i>
            <h5 class="text-grey mt-1 mr-1 ml-1">{object.price}</h5><i class="fa fa-plus text-success"></i>
        </div>

       

        <div>
        <button class="btn btn-warning " type="button" onClick={()=>removeItem(object.email,object.cakeid)}>Remove</button>
        </div>
        <div class="d-flex align-items-center"><i class="fa fa-trash mb-1 text-danger"></i></div>
    </div>
   
  
   
</div>
</div>
</div>

        

   ))}

   <div>
   <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        visible={isrun}
      />
     </div>
     <div class="d-flex justify-content-center row">
     <Link to="/checkout"><button  class="btn btn-warning btn-block btn-lg ml-2 pay-button justify-content-center" type="button" onClick={setReduxData}>Proceed to Checkout</button></Link> 
    
      </div>

   </div>
       
       
       :<div>
           No items in cart   
        </div>}


 
       </div>


    ) 
    
}

export default connect()(Cart);