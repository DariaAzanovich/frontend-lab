import { api } from "../api";
import { FETCH_COCKTAIL_SUCCESS, FETCH_LOADING, FETCH_COCKTAIL_FAIL } from "../types";
import { toast } from "react-toastify";

export const fetchCocktail = (id = null) => {
    return dispatch => {
        dispatch({
            type: FETCH_LOADING
        });

        let url ='';
        let headers = {};

        if(id) {
            url = `${api.API_URL + api.lookup}i=${id}`;
            headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            };
        } else {
            url = `${api.API_URL + api.random}`;
        }
        
        fetch(url, {
            headers: headers
        })
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