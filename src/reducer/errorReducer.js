import { SET_ERROR, CLEAR_ERROR } from "../types";

const initialValue = {
  error: "",
};
const errorReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};
export default errorReducer;
