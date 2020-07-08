import { createStore, combineReducers } from "redux";
import homeReducer from "./reducers/homeReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({ home: homeReducer, auth: authReducer });

let store = createStore(rootReducer);

export default store;
