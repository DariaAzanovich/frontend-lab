import React from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import './RandomCocktail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Ingredients from './Ingredients';

const RandomCocktail = () => {
    const loader = useSelector(state => state.fetchRandomCocktail.loader);

    const drinks = useSelector(state => state.fetchRandomCocktail.cocktail[0]);
    
    if(loader) {
        return <Loader />
    } else {
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
                    <table cellPadding="10">
                        <tbody>
                        <tr>
                            <td></td>
                            <td>Ingredient</td>
                            <td>Qnty</td>
                            <td></td>
                        </tr>
                        <Ingredients />
                        </tbody>
                    </table>
                    <p>{drinks.strInstructions}</p>
                </div>
            </div>
        )
    }
}

export default RandomCocktail;