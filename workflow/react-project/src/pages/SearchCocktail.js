import './SearchCocktail.css';
import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../components/Modal';
import { connect } from 'react-redux';
import RandomCocktail from '../components/RandomCocktail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { showCocktailModal } from '../redux/action-creators/modalActions';
import Loader from '../components/Loader';
import { fetchSearchCocktails, cleanSearchResults } from '../redux/action-creators/searchCocktailActions';
import _ from 'lodash';
import { ALCOHOLIC } from '../redux/types';
import IngredientCard from '../components/IngredientCard';
import SearchCard from '../components/SearchCard';

const SearchCocktail = (props) => {
    const [search, setSearch] = useState('');
    const [key, setKey] = useState(null);

    const NO_RESULTS = !props.loader && props.cocktails.length === 0 &&  props.ingredients.length === 0;
    const COCKTAILS_RES = !props.loader && props.cocktails.length !== 0;
    const INGREDIENT_RES = !props.loader && props.ingredients.length !== 0;

    const updateSearch = (event) => {
        const { value } = event.target;
        setSearch(value);

        debounceSearch(addSearchParams(value));
    }

    const debounceSearch = useCallback(
        _.debounce(search => {
            if(search) {
                props.fetchSearchCocktails(search);
            }
        }, 1000), 
    []);
 
    useEffect(() => {
        return () => {
            props.cleanSearchResults();
            debounceSearch.cancel();
        }
    }, []);

    const setCardsAmount = (n) => {
        let cards = [];
        for(let i = 0; i < n; i++) {
            const cardImgSrc = props.cocktails[i].strDrinkThumb;
            const cocktailName = props.cocktails[i].strDrink;
            
            const isAlco = props.cocktails[i].strAlcoholic === ALCOHOLIC;
            
            cards.push(
                <SearchCard 
                    cardIndex={i} 
                    cardImgSrc={cardImgSrc} 
                    cocktailName={cocktailName} 
                    isAlco={isAlco} 
                    setCardKey={setKey}
                />
            );
        }

        return cards;
    }

    const searchCocktail = (event) => {
        return search && props.fetchSearchCocktails(
            addSearchParams(search));
    }

    const addSearchParams = (value) => {
        if(!value) {
            return '';
        }

        const radio = document.querySelector('input[name="search-by"]:checked');

        if(radio.value === '1') {
            return 's=' + value;
        }

        return 'i=' + value;
    }

    return (
        <section className="search-cocktail-wrap">
            {props.modalState && 
                <Modal title="Cocktail">
                    <RandomCocktail cocktailKey={key}/>
                </Modal>
            }

            <div className="search-input-wrap">        
                <input 
                    type="text" 
                    placeholder="Type anything..." 
                    id="search" 
                    value={search}
                    onChange={updateSearch}
                />

                <span 
                    className="search-btn"
                    onClick={searchCocktail}
                >
                    <FontAwesomeIcon
                            icon={faSearch} 
                            size="1x"
                    />
                </span> 
            </div>
        
            <form className="checkbox-wrap">
                <label>
                    <input 
                        type="radio" 
                        defaultChecked 
                        name="search-by" 
                        value="1" 
                        onChange={searchCocktail}
                    />
                    <span>By drink name</span>
                </label> 

                <label>
                    <input 
                        type="radio" 
                        name="search-by" 
                        value="2" 
                        onChange={searchCocktail}
                    />
                    <span>By ingredient name</span>
                </label> 
            </form>

            {props.loader && <Loader />}

            {COCKTAILS_RES &&
                <ul className="cocktail-cards-list">
                    {setCardsAmount(props.cocktails.length)}
                </ul> 
            }

            {INGREDIENT_RES &&
                <ul className="cocktail-cards-list">
                    <IngredientCard />
                </ul> 
            }

            {NO_RESULTS &&
                <span className="empty-search">There will be search results</span>
            }
        </section>
    )
}

const mapStateToProps = state => {
    return {
        modalState: state.modal.showCocktailModal,
        loader: state.search.loader,
        cocktails: state.search.cocktails,
        ingredients: state.search.ingredients
    };
    
};

const mapDispatchToProps = { 
    showCocktailModal,
    fetchSearchCocktails,
    cleanSearchResults
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCocktail);