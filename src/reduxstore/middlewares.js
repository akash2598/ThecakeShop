//this is simple to define syntax but we need it nit and clean use arrow function

/*
export function FirstMiddleware(store) {
    return function (next) {
        return function (action) {
            console.log("This is middlewares")
            console.log("action", action, "store",store.getState())
            var result = next(action)
            console.log(".....",store.getState())
            
        }
        
    }
    
} */

/*
   let squre=function (num){
       return num*num
   }
   let squre =()=>{
       return num*num
   }
   same as
   let square=num=>num*nums

*/

//ES6 syntax
export let logger=store=>next=>action=>{
    //console.log("This is middlewares")
  //  console.log("before action", action, "store",store.getState())
    var result = next(action)
   // console.log(" after actions.....",store.getState())
}