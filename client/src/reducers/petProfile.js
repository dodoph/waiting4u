import {
  GET_PET_PROFILE,
  UPDATE_PET_PROFILE,
  GET_ADMINS_PET_PROFILES,
  GET_ALL_PET_PROFILES,
  CLEAR_PET_PROFILE,
  CLEAR_ADMINS_PET_PROFILES,
  PROFILE_ERROR,
} from "../actions/types";

const initialState = {
  petProfile: null,
  adminsPetProfiles: null,
  allPetProfiles: null,
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PET_PROFILE:
    case UPDATE_PET_PROFILE:
      return {
        ...state,
        petProfile: payload,
        loading: false,
      };
    case GET_ADMINS_PET_PROFILES:
      return {
        ...state,
        adminsPetProfiles: payload,
        loading: false,
      };
    case GET_ALL_PET_PROFILES:
      return {
        ...state,
        allPetProfiles: payload,
        loading: false,
      };
    case CLEAR_PET_PROFILE:
      return {
        ...state,
        petProfile: null,
        loading: false,
      };
    case CLEAR_ADMINS_PET_PROFILES:
      return {
        ...state,
        adminsPetProfiles: null,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
