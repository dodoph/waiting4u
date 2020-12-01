import {
  GET_PET_PROFILE,
  UPDATE_PET_PROFILE,
  GET_ADMINS_PET_PROFILES,
  GET_ALL_PET_PROFILES,
  CLEAR_PET_PROFILE,
  CLEAR_ADMINS_PET_PROFILES,
  PROFILE_ERROR,
  GET_LATEST_PET_STATUS,
  GET_USER_FAVORITE_PET_PROFILES,
} from "../actions/types";

const initialState = {
  petProfile: null,
  petProfileUpdated: false,
  adminsPetProfiles: null,
  allPetProfiles: null,
  petUpdateProfiles: null,
  userFavoritePetProfiles: null,
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PET_PROFILE:
      return {
        ...state,
        petProfile: payload,
        petProfileUpdated: false,
        loading: false,
      };
    case UPDATE_PET_PROFILE:
      return {
        ...state,
        petProfile: null,
        petProfileUpdated: true,
      };
    case GET_ADMINS_PET_PROFILES:
      return {
        ...state,
        petProfileUpdated: false,
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
        allPetProfiles: null,
        loading: false,
      };
    case CLEAR_ADMINS_PET_PROFILES:
      return {
        ...state,
        adminsPetProfiles: null,
        loading: false,
      };
    case GET_LATEST_PET_STATUS:
      return {
        ...state,
        petUpdateProfiles: payload,
        loading: false,
      };
    case GET_USER_FAVORITE_PET_PROFILES:
      return {
        ...state,
        userFavoritePetProfiles: payload,
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
