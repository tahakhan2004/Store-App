// import { Action } from "@remix-run/router"

import { ActionTypes } from "../ACTIONTYPE"


const INITIALSTATE = {
    data : [],
    loadingData : false, 
    cartitem : [],
}

const ProductReducer = (state = INITIALSTATE, action)=>{
    switch(action.type){
        case ActionTypes.GET_PRODUCT_LOADING:
            return{
                ...state,
                loadingData: true,
            }

        case ActionTypes.GET_PRODUCT_FAIL:
                return{
                    ...state,
                    loadingData: false,
                    data : [],
            }    

        case ActionTypes.GET_PRODUCT :
            return{
                ...state,
                data: action.payload,
                loadingData: false,
            }
        default:
           return state
}
}


const AddToCartReducer = (state = INITIALSTATE, action)=>{
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return{
                ...state,
                cartitem: [...state.cartitem, action.payload],
            }

            case ActionTypes.REMOVE_TO_CART:
                const product = state.cartitem.filter((p) => p.id != action.payload.id)
            return{
                ...state,
                cartitem: [...product],
            }    

        default:
           return state
}
}
export {ProductReducer, AddToCartReducer}