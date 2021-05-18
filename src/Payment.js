import axios from "axios"
import { connect } from "react-redux"

function Payment (props){
    let placeOrder=()=>{
        
        var data={
            price:props.totalprice,
            name:props.address.name,
            phone:props.address.phone,
            address:props.address.address,
            city:props.address.city,
            pincode:props.address.pincode,
            cakes:props.cakes

        }
        console.log("data...",data)
        
          axios({
              url:"https://apifromashu.herokuapp.com/api/addcakeorder",
              method:"post",
              headers:{
                authtoken:localStorage.token
              },
              data:data
          }).then((response)=>{
            console.log("order data",response.data)
          },(error)=>{
              console.log(error)
          })
        props.dispatch({
            type:"CHECKOUT",
            payload:4
        }) 
        props.history.push("/checkout/order") 

    }
    return(
        <div>
            Currentlly we are accesptiong only cod
            <br/>

            <button onClick={placeOrder}  class="btn btn-primary">Next</button>
        </div>
    )
}
export default connect(function(state,props){
    return {
      totalprice:state["price"],
      address:state["address"],
      cakes:state["cart"]
    }
    
    })(Payment)