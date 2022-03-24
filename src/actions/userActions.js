import axios from "axios";
import { setAuthToken } from "../helpers/axiosHeader";
import {
  LOGOUT,
  SET_CURRENT_USER,
  SET_ERROR,
  SET_LOADING,
  // SET_AUTHING,
} from "../types";
import { clearError } from "./errorActions";

const register = (data) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.post(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/auth/register",
      data
    );
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data,
    });
    dispatch(clearError());
    dispatch(loading(false));
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.response.data,
    });
    dispatch(loading(false));
  }
};

const login = (data) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await axios.post(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/auth/login",
      data
    );
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data,
    });
    const token = res.data.token;
    localStorage.setItem("token", res.data.token);
    setAuthToken(token);
    dispatch(clearError());
    dispatch(loading(false));
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.response.data,
    });
    dispatch(loading(false));
  }
};

const setCurrentUser = (token) => async (dispatch) => {
  try {
    // dispatch({
    //   type: SET_AUTHING,
    //   payload: true,
    // });
    setAuthToken(token);
    const res = await axios.get(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/auth/me"
    );
    dispatch({ type: SET_CURRENT_USER, payload: res.data });
    // dispatch({
    //   type: SET_AUTHING,
    //   payload: false,
    // });
  } catch (error) {
    setAuthToken(false);
    localStorage.removeItem("token");
    // dispatch({
    //   type: SET_AUTHING,
    //   payload: false,
    // });
  }
};

const loading = (isloading) => {
  return {
    type: SET_LOADING,
    payload: isloading,
  };
};

const logout = () => async (dispatch) => {
  dispatch(loading(true));
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("token");
  setAuthToken(false);
  dispatch(loading(false));
};

export { register, setCurrentUser, login, logout, loading };
