import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import messengerReducer from './messenger-reducer';
import usersReducer from './users-reducer';

let redusers= combineReducers({
    profile:profileReducer,
    messenger:messengerReducer,
    usersPage:usersReducer
});

let store = createStore(redusers);
window.store=store;
export default store;