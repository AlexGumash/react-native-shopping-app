import initialState from "../api/cart";

export const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      var newState = state;
      newState[action.id].count = newState[action.id].count + 1;
      newState[action.id].total =
        newState[action.id].price * newState[action.id].count;
      newState[action.id].available = newState[action.id].available - 1;
      return Object.assign({}, state, newState[action.id]);
    case "DEL_FROM_CART":
      var newState = state;
      newState[action.id].count = newState[action.id].count - 1;
      newState[action.id].total =
        newState[action.id].price * newState[action.id].count;
      newState[action.id].available = newState[action.id].available + 1;
      return Object.assign({}, state, newState[action.id]);
    default:
      return state;
  }
};
