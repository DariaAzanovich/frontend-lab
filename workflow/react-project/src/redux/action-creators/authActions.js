import { toast } from 'react-toastify';
import { api } from '../api';
import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    AUTHENTICATION_STARTED,
    ADD_USERNAME
} from '../types';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const method = 'POST';

const addUsername = data => ({
    type: ADD_USERNAME,
    payload: {
        data,
    },
});

export const logIn = data => {
    return dispatch => {
        dispatch({
            type: AUTHENTICATION_STARTED,
        });
        
        fetch(`${api.API_URL + api.SIGN_IN}`, {
            method: method,
            body: JSON.stringify(data),
            headers: headers,
            // credentials: 'include'
        })
        .then(res => {
            dispatch(addUsername(data.name));

            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: {
                    ...res.data,
                },
            });

            toast.success('Sign in success!');
        })
        .catch(err => {
            dispatch({
                type: SIGN_IN_FAIL
            });

            toast.error(err.toString());
        });
    };
};

export const registration = data => {
    return dispatch => {
        dispatch({
            type: AUTHENTICATION_STARTED,
        });
        
        fetch(`${api.API_URL + api.SIGN_UP}`, {
            method: method,
            body: JSON.stringify(data),
            headers: headers,
            // credentials: 'include'
        })
            .then(res => {
                dispatch(addUsername(data.name));

                dispatch({
                    type: REGISTRATION_SUCCESS,
                    payload: {
                        ...res.data,
                    }
                });

                toast.success('Registration success!');
            })
            .catch(err => {
                dispatch({
                    type: REGISTRATION_FAIL
                });

                toast.error(err.toString());
            });
    };
};

