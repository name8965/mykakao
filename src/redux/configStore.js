import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import kakao from "./modules/kakao";

const middlewars = [thunk];
const rootReducer = combineReducers({ kakao });
const enhancer = applyMiddleware(...middlewars);

const store = createStore(rootReducer, enhancer);

export default store;
