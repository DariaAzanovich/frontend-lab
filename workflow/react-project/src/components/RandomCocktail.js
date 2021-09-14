import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';
import './RandomCocktail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Ingredients from './Ingredients';
import { fetchRandomCocktail } from '../redux/actions';

const RandomCocktail = () => {
    const {loader, drinks, error} = useSelector(state => {
        return { 
            loader: state.randomCocktail.loader,
            drinks: state.randomCocktail.cocktail[0],
            error: state.randomCocktail.error
        }    
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRandomCocktail());
    }, [])
    
    if(loader) {
        return <Loader />
    } else if(error)
    {
        return (
            <p className="fetch-error">Sorry, smth wrong with server!</p>
        )
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