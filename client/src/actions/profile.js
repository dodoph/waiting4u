import axios from "axios";
import { setAlert } from "./alert";
import { URL_HOST } from "../constant";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

// Get current user profile
export const getCurrentAdminProfile = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const admin_id = localStorage.getItem("token");
    if (admin_id) {
      const res = await axios.get(`${URL_HOST}/admins/${admin_id}`, config);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};




// Get user profile
export const getCurrentUserProfile = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const user_id = localStorage.getItem("token");
    if (user_id) {
      const res = await axios.get(`${URL_HOST}/users/${user_id}`, config);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
