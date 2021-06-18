const INITIAL = {
  isEdit: false,
  id: null,
  index: null,
};
const editReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case "EDIT_TASK":
      return {
        ...state,
        isEdit: action.payload.isEdit,
        index: action.payload.index,
        id: action.payload.editId,
      };

    case "CANCEL_TASK":
      return {
        INITIAL,
      };

    default:
      return state;
  }
};

export default editReducer;
