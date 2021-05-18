import { Route } from "react-router"
import { Link } from "react-router-dom"
import Address from "./Address.js"
import CartSummary from "./CartSummary.js"
import Order from "./Order.js"
import Payment from "./Payment.js"
import {useRouteMatch} from 'react-router-dom'
import { connect } from "react-redux"

function Checkout(props){
    var route= useRouteMatch()
    var url=route.url
    var path=route.path
   
    return(
    <div className="row">
    
    <div className="col-4">
    <ul class="list-group">
  <Link to={url}>  <li class="list-group-item ">Cart Summary</li></Link>

    <Link to={url + '/address'}>   <li class="list-group-item" > Address</li></Link>
     
<Link to={url + '/payment'}>  <li class="list-group-item"> Payment</li></Link>
    
<Link to={url + '/order'}>  <li class="list-group-item">Order</li></Link>
     </ul>


     

    </div>
    <div className="col-8">
    { props.access <= 4 &&  props.access >= 1 &&   <Route  exact path={path}  component={CartSummary}/>}
    { props.access <= 4  && props.access > 1 &&    <Route  exact path= {path + '/address'}  component={Address}/>}
    {props.access <= 4  && props.access > 2 &&     <Route   exact path={path + '/payment'}  component={Payment}/>}
    {props.access == 1  &&     <Route   exact path={path + '/order'}  component={Order}/>}
    </div>
  

    </div>
    )
}
export default connect(function (state,props) {
    return{
    
    access:state?.access
    }
})(Checkout)