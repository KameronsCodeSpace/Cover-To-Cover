import axios from 'axios'
import { returnErrors } from './errorActions'

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "../Actions/types";

export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type: USER_LOADING });

    axios.get('/users/:username')
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        })).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        });
};

//Practice with tokens later
// // Setup config/headers and token
// export const tokenConfig = getState => {
//     const token = getState().auth.token;

//     //Headers
//     const config = {
//         headers: {
//             'Content-type': 'application/json'
//         }
//     };

// // If token, and to headers
// if(token) {
//     config.headers['x-auth-token'] = token;
// }

// return config;
// }