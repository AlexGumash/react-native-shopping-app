import * as actionTypes from "./constants.js";

import database from "./db/database.js";

export function fetchCars(dispatch) {
  return () => {
    dispatch({ type: actionTypes.START_FETCH });
    database.ref("/cars").once("value").then(snapshot => {
      const cars = snapshot.val();
      if (cars) {
        dispatch({ type: actionTypes.FINISH_FETCH, payload: cars });
      }
    });
  };
}
