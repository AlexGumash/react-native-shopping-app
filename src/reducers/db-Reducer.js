import * as actionTypes from "../constants.js";
import database from "../db/database.js";

const initialState = {
  fetched: false,
  fetching: false,
  data: {}
};

export const dbReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCH: {
      return Object.assign({}, state, {
        fetching: true
      });
    }
    case actionTypes.FINISH_FETCH: {
      return Object.assign({}, state, {
        fetched: true,
        fetching: false,
        data: action.payload
      });
    }
    case actionTypes.ADD_TO_CART: {
      const newState = { ...state.data };
      console.log(newState[action.id].available);
      newState[action.id].available = newState[action.id].available - 1;
      database.ref("cars/" + action.id).set(newState[action.id]);
      return { ...state, ...newState };
    }
    case actionTypes.DEL_FROM_CART: {
      const newState = { ...state.data };
      newState[action.id].available = newState[action.id].available + 1;
      database.ref("cars/" + action.id).set(newState[action.id]);
      return { ...state, ...newState };
    }
    default: {
      return state;
    }
  }
};
