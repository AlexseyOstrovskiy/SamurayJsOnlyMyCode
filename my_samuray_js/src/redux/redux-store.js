import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import messengerReducer from './messenger-reducer';

let redusers= combineReducers({
    profile:profileReducer,
    messenger:messengerReducer
});

let store = createStore(redusers);
window.store=store;
export default store;