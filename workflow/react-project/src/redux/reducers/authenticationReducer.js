import {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAIL,
    AUTHENTICATION_STARTED,
    ADD_USERNAME,
    LOG_OUT
} from '../types';

const initialState = {
    user: {},
    loader: false,
};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loader: false,
                token: action.payload.token,
            };
        case SIGN_IN_FAIL:
            return {
                ...state,
                loader: false
            };
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                loader: false,
                user: action.payload,
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
        case ADD_USERNAME:
            return {
                ...state,
                username: action.payload.data,
            };
            case LOG_OUT:
                return {
                    ...state,
                    token: null,
                };
        default:
            return state;
    }
}