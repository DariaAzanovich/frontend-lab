import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';
import './RandomCocktail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Ingredients from './Ingredients';
import { fetchRandomCocktail } from '../redux/action-creators/randomCocktailActions';

const RandomCocktail = (props) => {
    const {loader, drinks, fetchRandomCocktail, type, cocktails} = props; 

    useEffect(() => {
        if(!type) {
            fetchRandomCocktail();
        }
    }, [type]);
    
    if(loader) {
        return <Loader />
    } 

    if((type && cocktails[props.cocktailKey]) || drinks) {
        return (
            <div className="random-cocktail">
                <div className="cocktail-header">
                    <p className="cocktail-name">{type ? cocktails[props.cocktailKey].strDrink : drinks.strDrink}</p>
                    <FontAwesomeIcon
                        icon={faStar} 
                        size="lg"
                        className="cocktail-liked"
                        style={props.isAuth ? {
                            visibility: 'visible'
                        } : {}}
                    />
                </div>
    
                <img 
                        className="cocktail-img" 
                        alt="Cocktail" 
                        src={type ? cocktails[props.cocktailKey].strDrinkThumb : drinks.strDrinkThumb}
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
                        <Ingredients key={type && cocktails[props.cocktailKey]}/>
                        </tbody>
                    </table>
                    <p>{type ? cocktails[props.cocktailKey].strInstructions : drinks.strInstructions}</p>
                </div>
            </div>
        )
    }

    return null;
}

const mapStateToProps = state => {
    return {
        loader: state.randomCocktail.loader,
        drinks: state.randomCocktail.cocktail[0],
        isAuth: state.auth.isAuth,
        cocktails: state.search.cocktails
    };
    
};

const mapDispatchToProps = { fetchRandomCocktail };

export default connect(mapStateToProps, mapDispatchToProps)(RandomCocktail);