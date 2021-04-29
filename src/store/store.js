import { createStore, applyMiddleware, combineReducers } from "redux";
import boothReduser from "./photoBooth/boothReduser";
import reduxThunk from "redux-thunk";
import orderReduser from "./ordered/orderReduser";

export const store = createStore(
  combineReducers({ boothReduser, orderReduser }),
  applyMiddleware(reduxThunk)
);

export default store;
