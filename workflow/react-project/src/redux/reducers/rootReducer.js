import { combineReducers } from 'redux';
import { randomCocktailReducer } from './randomCocktailReducer';
import { authenticationReducer } from '../reducers/authenticationReducer';

export const rootReducer = combineReducers({ 
    randomCocktail: randomCocktailReducer,
    auth: authenticationReducer
});