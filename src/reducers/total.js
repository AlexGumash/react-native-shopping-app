const initialState = {
  countOfItems: 0,
  total: 0
};

export const total = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_TOTAL":
      state.countOfItems = 0;
      state.total = 0;

      Object.keys(action.data).map(item => {
        if (action.data[item].count > 0) {
          state.countOfItems += action.data[item].count;
          state.total += action.data[item].total;
        }
      });
      return state;
    default:
      return state;
  }
};
