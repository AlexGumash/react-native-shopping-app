import initialState from "../api/cart";
import * as actionTypes from "../constants.js";

export const cartItems = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      newState[action.id].count = newState[action.id].count + 1;
      newState[action.id].total =
        newState[action.id].price * newState[action.id].count;
      newState[action.id].available = newState[action.id].available - 1;
      return { ...state, ...newState };
    case actionTypes.DEL_FROM_CART:
      newState[action.id].count = newState[action.id].count - 1;
      newState[action.id].total =
        newState[action.id].price * newState[action.id].count;
      newState[action.id].available = newState[action.id].available + 1;
      return { ...state, ...newState };
    default:
      return state;
  }
};
