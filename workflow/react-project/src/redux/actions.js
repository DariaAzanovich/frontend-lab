import { api } from "./api";
import { FETCH_COCKTAIL_SUCCESS, FETCH_LOADING, SHOW_ERROR, HIDE_ERROR } from "./types";

export function showError(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ERROR,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideError());
        }, 3000);
    }
}

export function hideError() {
    return {
        type: HIDE_ERROR
    }
}

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
            dispatch(showError(error));
        })
    }
};
