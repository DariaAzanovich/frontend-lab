import { api } from "./api";
import { FETCH_COCKTAIL_SUCCESS, FETCH_COCKTAIL_FAIL, FETCH_LOADING } from "./types";

export const fetchRandomCocktail = () => {
    return dispatch => {
        dispatch({
            type: FETCH_LOADING
        });
        
        fetch(`${api.API_URL}/cocktails/random`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: FETCH_COCKTAIL_SUCCESS,
                payload: {...res.drinks}
            });
        })
        .catch(error => {
            dispatch({
                type: FETCH_COCKTAIL_FAIL,
                payload: error.message
            });
        })
    }
};
