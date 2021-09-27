import { combineReducers } from 'redux';
import { cocktailReducer } from './cocktailDataReducer';
import { authenticationReducer } from '../reducers/authenticationReducer';
import { modalsReducer } from './modalsReducer';
import { searchCocktailReducer } from './searchCocktailReducer';

export const rootReducer = combineReducers({ 
    cocktailData: cocktailReducer,
    auth: authenticationReducer,
    modal: modalsReducer,
    search: searchCocktailReducer
});