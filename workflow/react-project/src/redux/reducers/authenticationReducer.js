import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    AUTHENTICATION_STARTED,
    LOG_OUT,
    INIT_STATE
} from '../types';

const initialState = {
    loader: false,
    token: null, 
    isAuth: false
};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loader: false,
                token: action.payload.token,
                isAuth: true
            };
        case SIGN_IN_FAIL:
            return {
                ...state,
                loader: false
            };
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                loader: false
            };
        case REGISTRATION_FAIL:
            return {
                ...state,
                loader: false
            };
        case AUTHENTICATION_STARTED:
            return {
                ...state,
                loader: true,
            };
        case LOG_OUT:
            return {
                ...state,
                token: null,
                isAuth: false
            };
        case INIT_STATE:
            return {
                ...state,
                token: action.payload.token,
                isAuth: action.payload.isAuth,
            };
        default:
            return state;
    }
}