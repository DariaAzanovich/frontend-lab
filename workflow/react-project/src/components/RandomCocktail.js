import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';
import './RandomCocktail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Ingredients from './Ingredients';
import { fetchCocktail } from '../redux/action-creators/cocktailDataActions';

const RandomCocktail = (props) => {
    const {loader, drinks, fetchCocktail, type, cocktails} = props; 

    useEffect(() => {
        if(typeof props.cocktailKey !== 'number') {
            fetchCocktail();
        } else {
            const id = cocktails[props.cocktailKey]['idDrink'];

            fetchCocktail(id);
        }
    }, [type]);
    
    if(loader) {
        return <Loader />
    } 

    if(drinks) {
        return (
            <div className="random-cocktail">
                <div className="cocktail-header">
                    <p className="cocktail-name">{drinks.strDrink}</p>
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
                        <Ingredients cocktailKey={type && props.cocktailKey}/>
                        </tbody>
                    </table>
                    <p>{drinks.strInstructions}</p>
                </div>
            </div>
        )
    }

    return null;
}

const mapStateToProps = state => {
    return {
        loader: state.cocktailData.loader,
        drinks: state.cocktailData.cocktails[0],
        isAuth: state.auth.isAuth,
        cocktails: state.search.cocktails
    };
    
};

const mapDispatchToProps = { fetchCocktail };

export default connect(mapStateToProps, mapDispatchToProps)(RandomCocktail);