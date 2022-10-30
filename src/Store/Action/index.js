import { ActionTypes } from "../ACTIONTYPE"

const Addcounteraction = () =>{
    return (dispatch) => {
        dispatch({
            type: ActionTypes.ADD_COUNTER
        })    
    }
}


const Minuscounteraction = () =>{
    return (dispatch) => {
        dispatch({
            type: ActionTypes.MINUS_COUNTER
        })    
    }
}
export{Addcounteraction, Minuscounteraction}