import { combineReducers } from 'redux';
import { randomCocktailReducer } from './randomCocktailReducer';
import { authenticationReducer } from '../reducers/authenticationReducer';
import { modalsReducer } from './modalsReducer';

export const rootReducer = combineReducers({ 
    randomCocktail: randomCocktailReducer,
    auth: authenticationReducer,
    modal: modalsReducer
});