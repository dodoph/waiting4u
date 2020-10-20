import axios from 'axios';
import { setAlert } from './alert';
import { URL_HOST } from '../constant';

import {
    GET_PROFILE,
    PROFILE_ERROR
} from './types';

// Get current user profile
export const getCurrentProfile = () => async dispatch => {
    try {
        // const res = await axios.get(`${URL_HOST}/admins/`);
        const res = { "username": "Kiwi Admin", "email": "kiwi@waiting4u.com" }; 
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}