import {Link, useParams, useRouteMatch} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Loader from "react-loader-spinner"
function CakeDetail(props){

  var [isrun,setRun]=useState(true)
  var [isCartRun,setCartRun]=useState(false)
  var route= useRouteMatch()
  let url=route.url
  console.log('url',url)
   
  let [cakedata,setCakedata] = useState({})  
  
  let [addcart,setCartdata] = useState()  

  let params =useParams()
    


  

  useEffect(()=>{
    let cakedetailapiurl="https://apifromashu.herokuapp.com/api/cake/"+params.cakeid
    axios({
      method:'get',
      url:cakedetailapiurl,
    }).then((response)=>{
            setCakedata(response.data.data)
            
    },(error)=>{
         console.log("Error:-",error)
    })
  },[])


  let addToCart=()=>{
    setCartRun(true)
      let addtocarturl="https://apifromashu.herokuapp.com/api/addcaketocart"
      let token=localStorage.token
      axios({
        url:addtocarturl,
        method:'post',
        headers:{
          authtoken:token
        },
        data:{
          cakeid:cakedata.cakeid,
          name:cakedata.name,
          image:cakedata.image,
          price:cakedata.price,
          weight:cakedata.weight
        }
      }).then((response)=>{
        console.log("cake isss data",response.data)
        setCartdata("Item Added to cart successfully..")
        setCartRun(false)
       
      },(error)=>{
        console.log(error)
        setCartdata(error)
        setCartRun(false)
      })

   
  }

 

    return(
        <div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded" style={{'width': 'Auto' ,margin:'30px'}}>
        <div class="row g-0">
          <div class="col-md-4">
           {!cakedata.image && <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
         visible={isrun}
         />}
            { cakedata.image && <img style={{margin:'20px' ,height:'500px'}}
              src={cakedata.image}

              alt="..."
              class="img-fluid"
            />}
          </div>
          <div class="col-md-8">
            <div class="card-body">
            {!cakedata.name && <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
         visible={isrun}
         />}
             {cakedata.name && <h5 class="card-title">{cakedata.name}</h5>}<br/>
             
             {!cakedata.description && <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
         visible={isrun}
         />}
              {cakedata.description &&<h6 class="card-text">
              {cakedata.description}
              </h6>}
              <h3 class="card-text">
               CURRENT PRICE : <label style={{color:'orange'}}> {cakedata.price}</label>
              </h3>
              <h6 class="card-text">
                <b>91%</b> of buyers enjoyed this product <b>(87 votes)</b>
              </h6>

              <h3 class="card-text">
                <b>Weight:  3KG</b> 
              </h3>
              <h3 class="card-text">
               FLAVOUR : <label style={{color:'orange'}}> HAZELNUT CAKE</label>
              </h3>

              <h6 class="card-text">
                <b>TYPE</b> 
              </h6>
              <h6 class="card-text">
               GENERAL
              </h6>
{           localStorage.token  ?   <button type="button" class="btn btn-warning" onClick={addToCart}>Add to Cart</button>:
                     
                     <div>
                       <Link to="/login"><button  className="btn btn-primary" > Please Login to buy</button></Link>
                     </div>
}             <br/>
             <br/>
             { addcart && <div class="alert alert-warning alert-dismissible fade show"  role="alert">
            {  addcart}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>


              </div> }
             <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
         visible={isCartRun}
         />
            </div>
          </div>
        </div>
      </div>
    )
}

export default connect(function(state,props){
  console.log(".....state",state)
  return{
    
    islogin :state && state["isloggedin"]
  }
})(CakeDetail);