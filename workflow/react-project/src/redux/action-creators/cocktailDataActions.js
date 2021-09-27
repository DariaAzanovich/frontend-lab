import { api } from "../api";
import { FETCH_COCKTAIL_SUCCESS, FETCH_LOADING, FETCH_COCKTAIL_FAIL } from "../types";
import { toast } from "react-toastify";

const axios = require('axios');

export const fetchCocktail = (id = null) => {
    return dispatch => {
        dispatch({
            type: FETCH_LOADING
        });

        let urlTo ='';
        let headers = {};

        if(id !== null) {
            urlTo = api.lookup;
            headers = {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            };
        } else {
            urlTo = api.random;
        }
        
        axios.get(urlTo, {
            baseURL: api.API_URL,
            headers: headers,
            params: {
                i: id
            }
        })
        .then(res => {
            dispatch({
                type: FETCH_COCKTAIL_SUCCESS,
                payload: {...res.data.drinks}
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