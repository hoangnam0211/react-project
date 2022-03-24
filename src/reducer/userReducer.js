import { SET_AUTHING, SET_CURRENT_USER, SET_LOADING, LOGOUT } from "../types";

const initialUser = {
  currentUser: null,
  loading: false,
  authing: false,
};
const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    case SET_AUTHING:
      return { ...state, authing: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case LOGOUT:
      return { ...state, currentUser: null };

    default:
      return state;
  }
};
export default userReducer;
