import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';
import './RandomCocktail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Ingredients from './Ingredients';
import { fetchRandomCocktail } from '../redux/actions';


const RandomCocktail = (props) => {
    const {loader, drinks, fetchRandomCocktail} = props; 

    useEffect(() => {
        fetchRandomCocktail();
    }, [])
    
    if(loader) {
        return <Loader />
    } 

    return (
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

const mapStateToProps = state => {
    return {
        loader: state.randomCocktail.loader,
        drinks: state.randomCocktail.cocktail[0]
    };
    
};

const mapDispatchToProps = { fetchRandomCocktail };

export default connect(mapStateToProps, mapDispatchToProps)(RandomCocktail);