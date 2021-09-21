import { toast } from 'react-toastify';
import { api } from '../api';
import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    AUTHENTICATION_STARTED,
    LOG_OUT,
    INIT_STATE
} from '../types';
import { hideModal } from './modalActions';

const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const METHOD = 'POST';

export const logIn = data => {
    return dispatch => {
        dispatch({
            type: AUTHENTICATION_STARTED,
        });
        
        fetch(`${api.API_URL + api.SIGN_IN}`, {
            method: METHOD,
            body: JSON.stringify(data),
            headers: HEADERS
        })
        .then(res => res.json())
        .then(res => {
            if(res.message) {
                const err = new Error(res.message);
                throw err;
            }

            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: {
                    ...res,
                },
            });

            dispatch(hideModal());

            localStorage.setItem('token', res.token);

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
            method: METHOD,
            body: JSON.stringify(data),
            headers: HEADERS
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                const err = new Error(res.error.message);
                throw err;
            }

            dispatch({
                type: REGISTRATION_SUCCESS,
                payload: {
                    ...res,
                }
            });

            dispatch(hideModal());
            dispatch(logIn(data));

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

export const logOut = () => {
    return dispatch => {
        dispatch({
            type: LOG_OUT
        });

        localStorage.removeItem('token');
    }
};

const initState = (token, isAuth) => {
    return dispatch => {
        dispatch({
            type: INIT_STATE, 
            payload: {
                token,
                isAuth,
            }
        });

    }
}

export const getInitialState = () => {
    return dispatch => {
        let token = '';
        let isAuth = false;

        if (localStorage.getItem('token')) {
            token = localStorage.getItem('token');
            isAuth = true;
        }

        dispatch(initState(token, isAuth));
    };
};