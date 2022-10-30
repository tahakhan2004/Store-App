import axios from "axios";
import { ActionTypes } from "../ACTIONTYPE";

const ProductAction =  ()=>{
    return async (dispatch) =>{
        try{
         dispatch({
          type : ActionTypes.GET_PRODUCT_LOADING,
         }) 
       const data = await axios.get("https://dummyjson.com/products")
        dispatch({
          type: ActionTypes.GET_PRODUCT,
          payload : data.data.products, 
        })
      //  console.log(data.data.products);
        }
        catch (error) {
          console.log(error);
          dispatch({
            type : ActionTypes.GET_PRODUCT_FAIL,
          })
        } 
}
}

const AddtoCartAction = (product) =>{
  return (dispatch) => {
    dispatch({
      type : ActionTypes.ADD_TO_CART, 
      payload : product,   
    })
  }
}



const RemovetoCartAction = (product) =>{
  return (dispatch) => {
    dispatch({
      type : ActionTypes.REMOVE_TO_CART, 
      payload : product,   
    })
  }
}
export {ProductAction, AddtoCartAction , RemovetoCartAction}
