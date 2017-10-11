import { combineReducers, createStore } from "redux";

import { cartItems } from "./items-in-cart";
import { total } from "./total";

const rootReducer = combineReducers({
  cartItems,
  total
});

const store = createStore(rootReducer);

export default store;
