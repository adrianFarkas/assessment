const rootReducer = (state, action) => {
  switch (action.type) {
    case "STORE_USERS":
      return action.payload;
    default:
      return state;
  }
};

export default rootReducer;
