import * as actionTypes from "../constants.js";

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
    default: {
      return state;
    }
  }
};
