import { useState } from "react"
import { connect, useSelector } from "react-redux"


function Address (props){
var [formerror,setFormerrors]=useState({})
let useraddress ={}
  


let name=(event)=>{
  var value=event.target.value
  if(value.length>0){
   setFormerrors({})
   
  }
 
 }
 let phone=(event)=>{
   var value=event.target.value
   if(value.length>0){
     if(value.length>10 || value.length<10){
       var errors = {}
       errors.name="Please enter valid 10 digit phone number"
       setFormerrors(errors)
       console.log(formerror)
     }
     else{
    setFormerrors({})
     }
 
    
   }
  
  }
 
  let address=(event)=>{
   var value=event.target.value
   if(value.length>0){
    setFormerrors({})
    
   }
  
  }
 
  let city=(event)=>{
   var value=event.target.value
   if(value.length>0){
    setFormerrors({})

   }
  
  }
  let zip=(event)=>{
   var value=event.target.value
  
   if(value.length>0){
     if(value.length>6 || value.length<6){
       var errors = {}
       errors.name="Please enter 6 digit zip code"
       setFormerrors(errors)
     }
     else{
     setFormerrors({})
    
     }
   }
  
  }
 



 let validate=(elements)=>{
          console.log("received element",elements)
          var errors = {}
          if(!elements.name.value){
            errors.name="Name is Required"
          }
          else if(!elements.phone.value){
            errors.name="Phone is Required"
          }
          else if(!elements.address.value){
            errors.name="Address is Required"
          }
          else if(!elements.city.value){
            errors.name="City is Required"
          }
          else if(!elements.zip.value){
            errors.name="zip is Required"
          }
          else{
           useraddress={
             name:elements.name.value,
             phone:elements.phone.value,
             address:elements.address.value,
             city:elements.city.value,
             pincode:elements.zip.value

           }
            
          }

         
          var errorkeys=Object.keys(errors)
          console.log(errors,errorkeys)
          if(errorkeys.length>0)
          return errors
          else
          return false
 }

  let placeOrder=()=>{
    
    var form =document.getElementById("addressform")
    console.log("Form elements ",form.elements , form.controls)
    var error = validate(form.elements)
    console.log(error)
    if(error){
      console.log(error)
      setFormerrors(error)
      console.log("last step",formerror)
    }
    else{
      setFormerrors({})
    }
    if(error==false){
      console.log("this to open payment",formerror)
      props.history.push("/checkout/payment")
      props.dispatch({
        type:"CHECKOUT",
        payload:3
    }) 

    props.dispatch({
      type:"ADDRESS",
      payload:useraddress
  }) 
    
    }
    else{
      props.dispatch({
        type:"CHECKOUT",
        payload:2
    }) 
    }
   

}

 
 
    return(
        <div>
           <form style={{margin:"10px"}} id="addressform">
        
        <div class="form-group" >
    <label for="inputAddress">Name</label>
    <input type="text" class="form-control"  name="name" onChange={name} />
    </div>
  
  <div class="form-group">
    <label for="inputAddress">Phone</label>
    <input type="number" class="form-control"  name="phone" onChange={phone}/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address </label>
    <input type="text" class="form-control"  name="address" onChange={address} />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" name="city" onChange={city}/>
    </div>
   
    <div class="form-group col-md-6">
      <label for="inputZip">Zip</label>
      <input type="number" class="form-control" id="inputZip" name="zip" onChange={zip}/>
    </div>
  </div>
   

{/*  <Link to="/checkout/payment"> <button type="submit" class="btn btn-primary">Next</button></Link>
*/}     
       
 </form>
         <button onClick={placeOrder}  class="btn btn-primary">Next</button>
        
         <br/>
         <br/>
         { formerror.name && <div class="alert alert-danger" role="alert">
         {formerror.name}
         </div>}
        </div>
    )
}
export default connect()(Address)