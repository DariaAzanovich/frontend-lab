import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { randomCocktailReducer } from './randomCocktailReducer';

export const rootReducer = combineReducers({ 
    randomCocktail: randomCocktailReducer,
    app: appReducer
});