import { FETCH_COCKTAIL_FAIL, FETCH_COCKTAIL_SUCCESS, FETCH_LOADING } from "../types";

const initialState = {
    cocktails: [],
    loader: false
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
                cocktails: action.payload,
                loader: false
            };
        case FETCH_COCKTAIL_FAIL:
            return {
                ...state,
                loader: false
            };
        default: return state;
    }
}