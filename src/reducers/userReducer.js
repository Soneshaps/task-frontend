const INITIAL = {};
const userReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
