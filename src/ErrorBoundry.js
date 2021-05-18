import {Component} from 'react'

class ErrorBoundry extends Component {
    constructor(){
        super()
        this.state={
            hasError:false
        }
   
    }
     static getDerivedStateFromError(error){
         return{
             hasError:true
         }
     }   

   /* componentDidCatch(error,errorInfo){

    }*/

    render(){
        if(this.state.hasError){
            return(
                <div>
                    Oops! Error occured...
                </div>
            )
        }
        else{
         return   this.props.children
        }
    }
    
}
export default ErrorBoundry
//works only in production not in development