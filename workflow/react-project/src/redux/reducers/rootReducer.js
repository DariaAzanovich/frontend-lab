import { combineReducers } from 'redux';
import { randomCocktailReducer } from './randomCocktailReducer';

export const rootReducer = combineReducers({ 
    fetchRandomCocktail: randomCocktailReducer
});