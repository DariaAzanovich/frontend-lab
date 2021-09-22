import { SHOW_REG_MODAL, SHOW_COCKTAIL_MODAL,  HIDE_REG_MODAL, HIDE_COCKTAIL_MODAL, HIDE_MODAL } from "../types";

export const showCocktailModal = () => {
    return dispatch => {
        dispatch({
            type: SHOW_COCKTAIL_MODAL
        });
    }
};

export const hideCocktailModal = () => {
    return dispatch => {
        dispatch({
            type: HIDE_COCKTAIL_MODAL
        });
    }
};

export const showRegModal = () => {
    return dispatch => {
        dispatch({
            type: SHOW_REG_MODAL
        });
    }
};

export const hideRegModal = () => {
    return dispatch => {
        dispatch({
            type: HIDE_REG_MODAL
        });
    }
};

export const hideModal = () => {
    return dispatch => {
        dispatch({
            type: HIDE_MODAL
        });
    }
};