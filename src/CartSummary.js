import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

function CartSummary (props){
    
    useEffect(()=>{})

    

 let sendAccess=()=>{
    props.dispatch({
        type:"CHECKOUT",
        payload:2
    }) 
 }

   console.log("/////cart from redux",props.cart)
    return(
     <div>
       <div>
         {props.cart?.length>0 && props.cart.map((object,value)=>{

             return(

                <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                <div class="mr-1"><img class="rounded" src={object.image} width="70"/></div>
                <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">{object.name}</span>
                  
                </div>
               
               
              
                <div class="d-flex flex-row align-items-center qty"><i class="fa fa-minus text-danger"></i>
                    <h5 class="text-grey mt-1 mr-1 ml-1">{object.price}</h5><i class="fa fa-plus text-success"></i>
                </div>
        
               
        
                <div>
                
                </div>
                
            </div>

             )
            
              

         })}
          
          <div class="d-flex justify-content-center row">
        <Link to="/checkout/address"><button  class="btn btn-warning btn-block btn-lg ml-2 pay-button justify-content-center" type="button" onClick={sendAccess}>Next</button></Link> 
        
         </div>
         
         </div>
     </div>
    )
}
export default connect(function (state,props) {
    return{
    cart:state?.cart,
    access:state?.access
    }
})(CartSummary)
    
