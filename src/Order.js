import axios from "axios"
import { useEffect, useState } from "react"
import { connect } from "react-redux"

function Order (){
    var [cakes,setcakes]=useState()
   useEffect(()=>{
    axios({
        url:"https://apifromashu.herokuapp.com/api/cakeorders",
        method:"post",
        data:{},
        headers:{
          authtoken:localStorage.token
        }
    }).then((response)=>{
      console.log("order data",response.data.cakeorders.cakes)
      setcakes(response.data.cakeorders)
     console.log(cakes)
     console.log(cakes)
    },(error)=>{
        console.log(error)
    })
   },[])
    
   return(
    <div style={{margin:"35px"}}>
        <h1 style={{margin: "auto",  textAlign: "center", padding: "20px"}}>My Orders</h1>
    <div className="cart-design">
        <table className="table table-hover">
            <tbody>
                <tr>
                <th className="text-center">ORDER ID</th>
                    <th className="text-center">Product Details</th>
                    <th className="text-center">Shipped To</th>
                    <th className="text-center">Total Price</th>
                    <th className="text-center">Status</th>
                </tr>
                {cakes?.length > 0 && cakes.map((each,index)=>{
                    return(
                
                <tr>
                   <td className="text-center">{each.orderid}</td>
                    <td className="text-center">
                    { each.cakes?.length > 0 && each.cakes.map((each, index)=>{
                        return(
                           
           <div class="media">
        <img src={each.image}  class="mr-3" alt="..." style={{width:"150px",height:"100px"}}/>
        <div class="media-body">
            <h4 class="mt-0" style={{color:"#b9384f"}}>{each.name}</h4>
            
            <p style={{color:"#329e72",fontWeight:"bold"}}>Price : {each.price}/-</p>
        </div>
        </div>
                            

                        )
                    })
                   
                }
                 </td>
                    <td className="text-center"><strong>{each.name}</strong></td>
                    <td className="text-center"> <strong>{each.price}</strong></td>
                    {each.pending ? <td className="text-center"> <strong>Pending</strong></td>
                    :<td>null</td>}
                    
                </tr>
                    )
                })
                }
            </tbody>
        </table>

    </div>
    </div>
)

}
export default connect()(Order)