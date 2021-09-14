import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomCocktail } from '../redux/actions';
import Loader from './Loader';
import './RandomCocktail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Ingredients from './Ingredients';

const RandomCocktail = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const loader = useSelector(state => state.fetchRandomCocktail.loader);

    const drinks = useSelector(state => state.fetchRandomCocktail.cocktail[0]);

    // console.log('State: ', state);
    // console.log('Loader: ', state.fetchRandomCocktail.loader);
    // console.log('Drinks: ', state.fetchRandomCocktail.cocktail);



    // console.log(drinks);
    

    if(loader) {
        return <Loader />
    } else {
        // const cocktailData = state.fetchRandomCocktail.cocktail;


        const cocktailData = 'Hi there!';

        return(
            <div className="random-cocktail">
                <div className="cocktail-header">
                    <p className="cocktail-name">{drinks.strDrink}</p>
                    <FontAwesomeIcon
                        icon={faStar} 
                        size="lg"
                        className="cocktail-liked"
                    />
                </div>

                <img 
                        className="cocktail-img" 
                        alt="Cocktail" 
                        src={drinks.strDrinkThumb}
                />

                <div className="cocktail-body">
                    <p style={{
                        fontSize: "22px"
                    }}>Recipe</p>
                    <table cellpadding="10">
                        <tr>
                            <td></td>
                            <td>Ingredient</td>
                            <td>Qnty</td>
                            <td></td>
                        </tr>
                        <Ingredients />
                    </table>
                    <p>{drinks.strInstructions}</p>
                </div>
            </div>
        )
    }
}

export default RandomCocktail;