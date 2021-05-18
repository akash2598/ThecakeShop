import axios from "axios"
import { call,put,takeEvery } from "redux-saga/effects"




function login(action){
    return axios({
        method:"post",
        url:"https://apifromashu.herokuapp.com/api/login",
        data:action.payload
    })
}



function* LoginGenerator(action){
    var result = yield call(login,action)

    if(result.data.token){
        localStorage.token=result.data.token
        yield put({
            type:"Login_Success",
            payload:result.data
        })

    }
    else{
        yield put({
            type:"Login_Fail"
           // payload:result.data
        })
    }
    
}

export function* RootSaga (){
    yield takeEvery("LOGIN",LoginGenerator)
   }