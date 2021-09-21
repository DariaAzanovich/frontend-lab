import { api } from "../api";
import { FETCH_COCKTAIL_SUCCESS, FETCH_LOADING, FETCH_COCKTAIL_FAIL } from "../types";
import { toast } from "react-toastify";

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
            toast.error(error.toString());

            dispatch({
                type: FETCH_COCKTAIL_FAIL
            })
        })
    }
};