import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { cartItems } from "./items-in-cart";
import { total } from "./total";
import { dbReducer } from "./db-Reducer";

const rootReducer = combineReducers({
  cartItems,
  dbReducer,
  total
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
