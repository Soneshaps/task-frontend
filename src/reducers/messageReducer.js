const INITIAL = {
  isMessage: false,
  message: "",
};
const messageReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        ...state,
        isMessage: action.payload.isMessage,
        message: action.payload.message,
      };

    case "CANCEL_MESSAGE":
      return {
        INITIAL,
      };

    default:
      return state;
  }
};

export default messageReducer;
