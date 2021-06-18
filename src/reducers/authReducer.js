const INITIAL = {
  isLogged: false,
  username: "",
};
const authReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        isLogged: action.payload.isLogged,
        username: action.payload.username,
      };

    case "LOGOUT":
      return {
        ...INITIAL,
      };

    default:
      return state;
  }
};

export default authReducer;
