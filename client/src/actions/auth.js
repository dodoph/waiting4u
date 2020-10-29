import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  ADMIN_LOADED,
  AUTH_ERROR,
  CLEAR_PROFILE,
} from "./types";
import { URL_HOST } from "../constant";

// Global config settings
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const getConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

// Register Admin
export const adminRegister = ({ admin_name, email, password }) => async (
  dispatch
) => {
  const body = JSON.stringify({ admin_name, password, email });

  try {
    const res = await axios.post(`${URL_HOST}/admins`, body, config);
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { token: res.data.admin_id },
    });

    // dispatch(loadAdmin(user_id));
  } catch (err) {
    dispatch(setAlert(err.response.data.Error, "danger"));

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login Admin
export const adminLogin = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${URL_HOST}/admins/login`, body, config);
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token: res.data.admin_id },
    });

    dispatch(loadAdmin(res.data.admin_id));
  } catch (err) {
    dispatch(setAlert(err.response.data.Error, "danger"));

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Load Admin
export const loadAdmin = (admin_id = null) => async (dispatch) => {
  try {
    if (admin_id) {
      const res = await axios.get(`${URL_HOST}/admins/${admin_id}`, getConfig);
      console.log(res);
      dispatch({
        type: ADMIN_LOADED,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ user_name, email, password, introduction }) => async (dispatch) => {
  const body = JSON.stringify({ user_name, email, password, introduction });

  try {
    const res = await axios.post(`${URL_HOST}/users`, body, config);
    //const placeholder = { token: "token-placeholder" };
    //const res = { data: placeholder };
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { token: res.data.user_id },
    });

    //dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert(err.response.data.Error, "danger"));

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${URL_HOST}/users/login`, body, config);
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token: res.data.user_id },
    });

    dispatch(loadUser(res.data.user_id));
  } catch (err) {
    dispatch(setAlert(err.response.data.Error, "danger"));

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};


// Load User
export const loadUser = (user_id = null) => async (dispatch) => {
  try {
    if (user_id) {
      const res = await axios.get(`${URL_HOST}/users/${user_id}`, getConfig);
      console.log(res);
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Logout/Clear profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
