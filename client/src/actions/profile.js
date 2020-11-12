import axios from "axios";
import { setAlert } from "./alert";
import { URL_HOST } from "../constant";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_PET_PROFILE,
  UPDATE_PET_PROFILE,
  GET_ADMINS_PET_PROFILES,
  GET_ALL_PET_PROFILES,
} from "./types";

// Global config settings
const postConfig = {
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

// Get user profile
export const getCurrentUserProfile = () => async (dispatch) => {
  try {
    const user_id = localStorage.getItem("token");
    console.log(user_id);
    if (user_id) {
      const res = await axios.get(`${URL_HOST}/users/${user_id}`, getConfig);
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

// Get current admin profile
export const getCurrentAdminProfile = () => async (dispatch) => {
  try {
    const admin_id = localStorage.getItem("token");
    if (admin_id) {
      const res = await axios.get(`${URL_HOST}/admins/${admin_id}`, getConfig);
      console.log(res);
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
      const res = await axios.get(
        `${URL_HOST}/admins/${admin_id}/pets`,
        getConfig
      );
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

// Create a pet profile
export const createPetProfile = (formData, history) => async (dispatch) => {
  try {
    const admin_id = localStorage.getItem("token");
    const res = await axios.post(
      `${URL_HOST}/admins/${admin_id}/pets`,
      formData,
      postConfig
    );
    dispatch({
      type: GET_PET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Pet Profile Created", "success"));
    history.push("/admindashboard");
  } catch (err) {
    dispatch(setAlert(err.response.data.Error, "danger"));
  }
};

// Get a pet profile (admin view)
export const getPetProfile = (pet_id) => async (dispatch) => {
  try {
    const admin_id = localStorage.getItem("token");
    const res = await axios.get(`${URL_HOST}/admins/${admin_id}/pets/${pet_id}`, getConfig );
    console.log(res);
    dispatch({
      type: GET_PET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get a pet profile (public view)
export const getPetProfileViewOnly = (pet_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL_HOST}/pets/${pet_id}`, getConfig );
    console.log(res);
    dispatch({
      type: GET_PET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Update a pet profile
export const updatePetProfile = (formData, history, pet_id) => async (dispatch) => {
  try {
    const admin_id = localStorage.getItem("token");
    const res = await axios.put(`${URL_HOST}/admins/${admin_id}/pets/${pet_id}`, formData, postConfig );
    console.log(res);
    dispatch({
      type: UPDATE_PET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Pet Profile Updated", "success"));
    history.push("/managepets");
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete a pet profile
export const deletePetProfile = (pet_id) => async (dispatch) => {
  try {
    const admin_id = localStorage.getItem("token");
    await axios.delete(`${URL_HOST}/admins/${admin_id}/pets/${pet_id}`);
    console.log("deleted a pet profile");
    // update reducer
    const res = await axios.get(
      `${URL_HOST}/admins/${admin_id}/pets`,
      getConfig
    );
    console.log(res);
    dispatch({
      type: GET_ADMINS_PET_PROFILES,
      payload: res.data,
    });
    dispatch(setAlert("Pet Profile Deleted", "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.Error, "danger"));
  }
};

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
    console.log(err);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.Error, status: err.response.status },
    });
  }
};

// Get all pet profiles by search
export const getAllPetsProfilesBySearch = (formData) => async (dispatch) => {
  try {
    const { type, breed, dispositions } = formData;
    if (type === "All" && breed === "All" && dispositions.length === 0) {
      return getAllPetProfiles();
    }
    
    let params = "";
    if (type !== "All") {
      params = params + "type=" + type.toLowerCase();
    }
    if (breed !== "All") {
      params = params + "&breed=" + breed.toLowerCase();
    }
    if (dispositions.length > 0) {
      if (type === "All" && breed === "All") {
        params = params + "dispositions=" + dispositions;
      } else {
        params = params + "&dispositions=" + dispositions;
      }
    }
    const res = await axios.get(`${URL_HOST}/pets?${params}`, getConfig);
    console.log(res);
    dispatch({
      type: GET_ALL_PET_PROFILES,
      payload: res.data.length === 0 ? [] : res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.Error, status: err.response.status },
    });
  }
};

//user update profile
export const updateUserProfile = (formData, history) => async (dispatch) => {
  try {
    const user_id = localStorage.getItem("token");
    const res = await axios.patch(
        `${URL_HOST}/users/${user_id}`,
        formData,
        postConfig
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("User Profile Updated", "success"));
    history.push("/dashboard");
  } catch (err) {
    dispatch(setAlert(err.response.data.Error, "danger"));
  }
};


//Admin update profile
export const updateAdminProfile = (formData, history) => async (dispatch) => {
  try {
    const admin_id = localStorage.getItem("token");
    //console.log(formData);
    const res = await axios.patch(
        `${URL_HOST}/admins/${admin_id}`,
        formData,
        postConfig
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Admin Profile Updated", "success"));
    history.push("/admindashboard");
  } catch (err) {
    dispatch(setAlert(err.response.data.Error, "danger"));
  }
};