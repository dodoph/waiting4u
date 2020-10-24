import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import adminProfile from './adminProfile';

export default combineReducers({
    alert,
    auth,
    adminProfile
});