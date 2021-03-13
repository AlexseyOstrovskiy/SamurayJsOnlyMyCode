import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
let redusers= combineReducers({
    profile:profileReducer
});

let store = createStore(redusers)
export default store;