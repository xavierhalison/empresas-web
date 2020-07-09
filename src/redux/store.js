import { createStore, combineReducers } from "redux";
import homeReducer from "./reducers/homeReducer";
import authReducer from "./reducers/authReducer";
import companyReducer from "./reducers/companyReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  company: companyReducer,
});

let store = createStore(rootReducer);

export default store;
