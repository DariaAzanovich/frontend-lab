import { api } from "../api";
import { FETCH_SEARCH_COCKTAILS_SUCCESS, FETCH_SEARCH_COCKTAILS_LOADING, FETCH_SEARCH_COCKTAILS_FAIL, CLEAN_SEARCH_RESULTS } from "../types";
import { toast } from "react-toastify";

export const fetchSearchCocktails = (search) => {
    return async dispatch => {
        try {
            dispatch({
                type: FETCH_SEARCH_COCKTAILS_LOADING
            });
            
            const response = await fetch(`${api.API_URL + api.search + search}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            const json = await response.json();

            if(json.error) {
                const err = new Error(json.error.message);
                throw err;
            }
            
            dispatch({
                type: FETCH_SEARCH_COCKTAILS_SUCCESS,
                payload: {...json}
            });
        } catch(error) {
            toast.error(error.toString());

            dispatch({
                type: FETCH_SEARCH_COCKTAILS_FAIL
            })
        }
    }
};

export const cleanSearchResults = () => {
    return dispatch => {
        dispatch({
            type: CLEAN_SEARCH_RESULTS
        });
    }
}