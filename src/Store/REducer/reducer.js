import { ActionTypes } from "../ACTIONTYPE"

const INITIALSTATE = {
    globalCounter : 0,
}  

const addCounterreducer = (state= INITIALSTATE, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COUNTER:
        return{
            globalCounter: ++state.globalCounter,
        }    

        case ActionTypes.MINUS_COUNTER:
        return{
            globalCounter: --state.globalCounter,
        }
        default:
            return{...state}
    }
}

export {addCounterreducer}