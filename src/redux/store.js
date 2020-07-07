import { createStore } from "redux";
import homeReducer from "./reducers/homeReducer";

let store = createStore(homeReducer);

export default store;
