import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { URL_HOST } from "../constant";

// Register Admin
export const adminRegister = ({ admin_name, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify({ admin_name, password, email });

  try {
    const res = await axios.post(`${URL_HOST}/admins`, body, config);
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    
    // dispatch(loadUser(res.admin_id));
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
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const admin_id = "123456";
    const res = await axios.get(`${URL_HOST}/admins/${admin_id}`, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadAdmin(admin_id));
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
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const res = await axios.get(`${URL_HOST}/admins/${admin_id}`, config);
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

// Register User
export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

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
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

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
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const res = await axios.get(`${URL_HOST}/admins/${user_id}`, config);
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
  dispatch({ type: LOGOUT });
};
