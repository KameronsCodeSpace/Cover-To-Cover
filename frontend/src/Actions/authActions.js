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
    // UPLOAD_AVATAR
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

// Register User
export const register = (user) => dispatch => {

    // Headers for when you use token: Not yet
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }

    axios.post('/auth/signup', user)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
            );
            dispatch({
                type: REGISTER_FAIL
            });
        });
};

// Login User
export const login = (user) => dispatch => {
    axios.post('/auth/login', user)
    
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
};




// Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

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