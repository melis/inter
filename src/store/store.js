import { createStore, applyMiddleware } from "redux";
import boothReduser from "./photoBooth/boothReduser";
import reduxThunk from "redux-thunk";

export const store = createStore(boothReduser, applyMiddleware(reduxThunk));

export default store;
