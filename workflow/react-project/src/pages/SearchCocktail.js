import './SearchCocktail.css';
import React, { useState, useEffect } from 'react';
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

    const updateSearch = (event) => {
        setSearch(event.target.value);
    }

    const debounceSearch = 
        _.debounce(search => {
            props.fetchSearchCocktails(search);
        }, 1000);
    
    useEffect(() => {
        if (search) {
            debounceSearch(addSearchParams());
        }
    }, [search]);

    useEffect(props.cleanSearchResults, []);

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

    const searchCocktail = () => {
        return search && props.fetchSearchCocktails(
            addSearchParams());
    }

    const addSearchParams = () => {
        if(!search) {
            return '';
        }

        const radio = document.querySelector('input[name="search-by"]:checked');

        if(radio.value === '1') {
            return 's=' + search;
        }

        return 'i=' + search;
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

            {!props.loader && props.cocktails.length !== 0 &&
                <ul className="cocktail-cards-list">
                    {setCardsAmount(props.cocktails.length)}
                </ul> 
            }

            {!props.loader && props.ingredients.length !== 0 &&
                <ul className="cocktail-cards-list">
                    <IngredientCard />
                </ul> 
            }

            {!props.loader && props.cocktails.length === 0 &&  props.ingredients.length === 0 &&
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