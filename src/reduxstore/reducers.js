var demo = function(state={
    user:"",
    access:1,
    isfetching:false,
    isloggedin:false,
    loginSuccess:false
    

},action){
    switch(action.type){
        case "LOGIN":{
            
            state={...state}
           state["isfetching"]=true
            
            return state
        }
        case "Login_Success":{
       
            state={...state}
           state["isfetching"]=false
           state["user"]=action.payload
           state["isloggedin"]=true
           state["loginerror"]=false
           state["loginSuccess"]=true 
            return state
        }

        case "Login_Fail":{
           
            state={...state}
           state["isfetching"]=false
           state["loginerror"]=true
           state["user"]=""
           state["loginSuccess"]=false
            return state
        }


        case "LOGOUT":{
           
            state={...state}
            state["isloggedin"]=false
            state["user"]=""
           
            return state
        }
        case "ALREADY_LOG_IN":{
           
            state={...state}
            state["isloggedin"]=true
            state["user"]=action.payload
           
            return state
        }

        case "CARTDATA":{
           
            state={...state}
            state["cart"]=action.payload.cakes
            state["price"]=action.payload.total
            console.log("total",state["price"])
           
           
            return state
        }

        case "ADDRESS":{
           
            state={...state}
            state["address"]=action.payload
            
           
           
           
            return state
        }

       

        case "CHECKOUT":{
          //  console.log("Checkout is called")
            state={...state}
            state["access"]=action.payload
            console.log("accesss",state)
           
           
            return state
        }


        default:return state
           
        
    }
}
export default demo