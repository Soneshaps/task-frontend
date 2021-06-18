export const showMessage = (data) => {
  return { type: "SET_MESSAGE", payload: data };
};

export const hideMessage = () => {
  return { type: "CANCEL_MESSAGE" };
};
