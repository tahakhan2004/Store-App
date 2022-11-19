import { ActionTypes } from "../ACTIONTYPE"

const INITIALSTATE = {
    globalCounter : 1,
}  

const addCounterreducer = (state= INITIALSTATE, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COUNTER:
        return{
            globalCounter: ++state.globalCounter,
        }    

        case ActionTypes.MINUS_COUNTER:
           if(state.globalCounter <= 0){
              state.globalCounter = 1
           }
        return{
            globalCounter: --state.globalCounter,
            
        }
  
        default:
            return{...state}
    }
}

export {addCounterreducer}





// if(state.globalCounter <= 0){
//     state.globalCounter === 0
// }

