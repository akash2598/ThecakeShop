import {createStore,applyMiddleware} from 'redux'
import  demo  from "./reducers"
import {logger} from "./middlewares"
import createSaga from "redux-saga"
import {RootSaga }from "./Sagas"


var sagaMiddleware = createSaga()
var middlewares=applyMiddleware(logger,sagaMiddleware)
var dmart=createStore(demo,middlewares)
sagaMiddleware.run(RootSaga)


export default dmart
