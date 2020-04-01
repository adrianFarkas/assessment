const rootReducer = (state, action) => {
  switch (action.type) {
    case "STORE_USERS":
      return action.payload;
    case "UPDATE_STATUS":
      return state.map(user =>
        user.id === action.payload.id
          ? { ...user, status: action.payload.status }
          : user
      );
    default:
      return state;
  }
};

export default rootReducer;
