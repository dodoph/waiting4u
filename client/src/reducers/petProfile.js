import { GET_PET_PROFILE, CLEAR_PET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
  petProfile: null,
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
        loading: false,
      };
    case CLEAR_PET_PROFILE:
      return {
        ...state,
        petProfile: null,
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
