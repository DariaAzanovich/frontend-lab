import { api } from "../api";
import { FETCH_SEARCH_COCKTAILS_SUCCESS, FETCH_SEARCH_COCKTAILS_LOADING, FETCH_SEARCH_COCKTAILS_FAIL, LEAVE_SEARCH_PAGE } from "../types";
import { toast } from "react-toastify";
import history from "../history";

export const fetchSearchCocktails = (search) => {
    return dispatch => {
        dispatch({
            type: FETCH_SEARCH_COCKTAILS_LOADING
        });
        
        fetch(`${api.API_URL + api.search + search}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(result => {
            dispatch({
                type: FETCH_SEARCH_COCKTAILS_SUCCESS,
                payload: [...result.drinks]
            });
        })
        .catch(error => {
            toast.error(error.toString());

            dispatch({
                type: FETCH_SEARCH_COCKTAILS_FAIL
            })
        })
    }
};

export const leaveSearchPage = () => {
    return dispatch => {
        dispatch({
            type: LEAVE_SEARCH_PAGE
        });
    }
}