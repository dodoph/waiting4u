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
  CLEAR_PROFILE
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { URL_HOST } from "../constant";

// Global config settings
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
}

const getConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
}

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
      payload: res.data,
    });
    
    // dispatch(loadAdmin(res.data.admin_id));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

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
      payload: res.data,
    });

    dispatch(loadAdmin(res.data.admin_id));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Load Admin
export const loadAdmin = (admin_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL_HOST}/admins/${admin_id}`, getConfig);
    console.log(res);
    dispatch({
      type: ADMIN_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ username, email, password }) => async (dispatch) => {

  const body = JSON.stringify({ username, email, password });

  try {
    // const res = await axios.post('/api/users', body, config);
    const placeholder = { token: "token-placeholder" };
    const res = { data: placeholder };
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {

  const body = JSON.stringify({ email, password });

  try {
    // const res = await axios.post('/api/login', body, config);
    const placeholder = { token: "token-placeholder" };
    const res = { data: placeholder };
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Load User
export const loadUser= (user_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL_HOST}/admins/${user_id}`, getConfig);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
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
