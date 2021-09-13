import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomCocktail } from '../redux/actions';
import Loader from './Loader';
import './RandomCocktail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Ingredients from './Ingredients';

const RandomCocktail = () => {
    // const state = useSelector((state) => state);
    // const dispatch = useDispatch();

    const loader = useSelector(state => state.fetchRandomCocktail.loader);

    const drinks = useSelector(state => state.fetchRandomCocktail.cocktail);



    // console.log(drinks);
    

    // useEffect(() => {
    //     fetchRandomCocktail()(dispatch);
    // })

    if(loader) {
        return <Loader />
    } else {
        // const cocktailData = state.fetchRandomCocktail.cocktail;


        const cocktailData = 'Hi there!';

        return(
            <div className="random-cocktail">
                <div className="cocktail-header">
                    <p className="cocktail-name">Name</p>
                    <FontAwesomeIcon
                        icon={faStar} 
                            size="2x"
                            className="cocktail-liked"
                    />
                </div>

                <img 
                        className="cocktail-img" 
                        alt="Cocktail" 
                        src=""
                />

                <div className="cocktail-body">
                    <p>Recipe</p>
                    <Ingredients />
                </div>
            </div>
        )
    }
}

export default RandomCocktail;