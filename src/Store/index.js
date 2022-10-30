import { createStore  } from "redux";
import { applyMiddleware  } from "redux";

import thunk from "redux-thunk";
import  combineReducer from "./REducer/CombineReducer";
// import { addCounterreducer } from "./REducer/reducer";


const store = createStore(combineReducer, {} , applyMiddleware(thunk));
export default store