import axios from "axios";
import { setAlert } from "./alert";
import { URL_HOST } from "../constant";

import { GET_PROFILE, PROFILE_ERROR, GET_PET_PROFILE, GET_ADMINS_PET_PROFILES, GET_ALL_PET_PROFILES } from "./types";

// Global config settings
const postConfig = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
}

const getConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
}

// Get current admin profile
export const getCurrentAdminProfile = () => async (dispatch) => {
  try {
    const admin_id = localStorage.getItem("token");
    if (admin_id) {
      const res = await axios.get(`${URL_HOST}/admins/${admin_id}`, getConfig);
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

// Get current admin's pet profiles
export const getAdminPetProfiles = () => async (dispatch) => {
  try {
    const admin_id = localStorage.getItem("token");
    if (admin_id) {
      const res = await axios.get(`${URL_HOST}/admins/${admin_id}/pets`, getConfig);
      console.log(res);
      dispatch({
        type: GET_ADMINS_PET_PROFILES,
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

// Create pet profile
export const createPetProfile = (formData, history) => async dispatch => {
  try {
    const admin_id = localStorage.getItem("token");
    const res = await axios.post(`${URL_HOST}/admins/${admin_id}/pets`,formData, postConfig);
    dispatch({
      type: GET_PET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Pet Profile Created", "success"));
    history.push("/admindashboard");
  } catch(err) {
    dispatch(setAlert(err.response.data.Error, "danger"));
  }
}

// Get all pet profiles
export const getAllPetProfiles = () => async (dispatch) => {
  try {
      const res = await axios.get(`${URL_HOST}/pets`, getConfig);
      console.log(res);
      dispatch({
        type: GET_ALL_PET_PROFILES,
        payload: res.data,
      });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};