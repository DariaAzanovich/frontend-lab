import { SHOW_COCKTAIL_MODAL, SHOW_REG_MODAL, HIDE_COCKTAIL_MODAL, HIDE_REG_MODAL, HIDE_MODAL } from '../types';

const initialState = {
    showCocktailModal: false,
    showRegModal: false
};

export function modalsReducer(state = initialState, action) {
    switch(action.type) {
        case SHOW_COCKTAIL_MODAL:
            return {
                ...state,
                showCocktailModal: true
            };
        case HIDE_COCKTAIL_MODAL:
            return {
                ...state,
                showCocktailModal: false
            };
        case SHOW_REG_MODAL:
            return {
                ...state,
                showRegModal: true
            };
        case HIDE_REG_MODAL:
            return {
                ...state,
                showRegModal: false
            };
        case HIDE_MODAL:
            return {
                ...state,
                showCocktailModal: false,
                showRegModal: false
            };
        default: return state;
    }
}