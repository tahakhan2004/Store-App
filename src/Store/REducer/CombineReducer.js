import {combineReducers} from "redux"
import { AddToCartReducer, ProductReducer } from "./productReducer"
import { addCounterreducer, minusCounterReducer } from "./reducer"

const combineReducer = combineReducers({
    addCounterreducer: addCounterreducer,
    ProductReducer : ProductReducer,
    AddToCartReducer : AddToCartReducer,

})

export default combineReducer