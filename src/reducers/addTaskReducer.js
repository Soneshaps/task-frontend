const INITIAL = {};
const addTaskReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return state;
  }
};

export default addTaskReducer;
