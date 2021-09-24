import { 
    FETCH_SEARCH_COCKTAILS_LOADING, FETCH_SEARCH_COCKTAILS_SUCCESS, 
    FETCH_SEARCH_COCKTAILS_FAIL,
    CLEAN_SEARCH_RESULTS
} from "../types";

const initialState = {
    cocktails: {},
    loader: false
};

export const searchCocktailReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SEARCH_COCKTAILS_LOADING:
            return {
                ...state,
                loader: true,
                cocktails: {}
            };
        case FETCH_SEARCH_COCKTAILS_SUCCESS:
            return {
                ...state,
                cocktails: action.payload,
                loader: false
            };
        case FETCH_SEARCH_COCKTAILS_FAIL:
            return {
                ...state,
                loader: false,
                cocktails: {}
            };
        case CLEAN_SEARCH_RESULTS:
            return {
                ...state,
                cocktails: {}
            };   
        default: return state;
    }
}