import { FETCH_COCKTAIL_FAIL, FETCH_COCKTAIL_SUCCESS, FETCH_LOADING } from "../types";

const initialState = {
    cocktail: {},
    error: null,
    loader: true
};

export const randomCocktailReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOADING:
            return {
                ...state,
                loader: true
            };
        case FETCH_COCKTAIL_SUCCESS:
            return {
                ...state,
                cocktail: action.payload,
                loader: false
            };
        case FETCH_COCKTAIL_FAIL:
            return {
                ...state,
                error: action.payload.error,
                loader: false
            };
        default: return state;
    }
}