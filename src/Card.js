
import { Link } from 'react-router-dom';

function Card(props) {
 // console.log("props received",props)
    return (
      <div className="row ">
      <div class="col-sm-6 ">
      <div className="Card " style={{width:"100%" ,height:"100%",padding:"10px"}}>
          <div className="card-deck" style={{width: 300}} >
       <div className="card" style={{width: 180}}>
    <Link to={'/cake/'+props.countrydata.cakeid}><img src={props.countrydata.image} className="card-img-top" alt="..." height="100"/></Link>
     <div className="card-body" style={{width: 180}}>
    <h6 className="card-title justify-content-center" style={{height: 20,width:200}}>{props.countrydata.name}</h6>
  </div>
          </div>

        

          </div>
      </div>
      </div>
      </div>
     
    );
  }
  
  export default Card;