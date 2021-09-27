import './SearchCocktail.css';
import React, { useState, useRef, useEffect } from 'react';
import Modal from '../components/Modal';
import { connect } from 'react-redux';
import RandomCocktail from '../components/RandomCocktail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail, faSearch } from '@fortawesome/free-solid-svg-icons';
import { showCocktailModal } from '../redux/action-creators/modalActions';
import Loader from '../components/Loader';
import { fetchSearchCocktails, cleanSearchResults } from '../redux/action-creators/searchCocktailActions';
import _ from 'lodash';

const SearchCocktail = (props) => {
    const [search, setSearch] = useState('');
    const [key, setKey] = useState(null);

    const updateSearch = (event) => {
        setSearch(event.target.value);
    }

    const debounceSearch = useRef(
        _.debounce(search => {
            props.fetchSearchCocktails(search);
        }, 1000)
    );

    console.log(props.cocktails);
    
    useEffect(() => {
        if (search) {
            debounceSearch.current(addSearchParams());
        }
    },[search]);

    useEffect(props.cleanSearchResults, []);

    const setCardsAmount = (n) => {
        let cards = [];
        for(let i = 0; i < n; i++) {
            const src = props.cocktails[i].strDrinkThumb;
            const cocktailName = props.cocktails[i].strDrink;
            let isAlco = false;
            if (props.cocktails[i].strAlcoholic === 'Alcoholic') {
                isAlco = true;
            }
            
            cards.push(addSearchCard(i, src, cocktailName, isAlco));
        }

        return cards;
    }

    const addSearchCard = (i, src, name, isAlco) => {
        return (
            <li className="cocktail-card" key={i}>
                <img className="cocktail-search-img" src={src} alt={name} />

                <span 
                    className="cocktail-search-name"
                    onClick={() => {
                        setKey(i);
                        props.showCocktailModal();
                        }}
                >
                    {name}
                </span>

                <div className="cocktail-search-icons">
                    <span className="search-icon-age">
                        {isAlco ? '18+' : '0+'}
                        <div className="dropdown-prompt">
                            <span>{isAlco ? 'Contain alcohol' : 'No alcohol'}</span>
                        </div>
                    </span>

                    

                    <FontAwesomeIcon 
                        icon={faCocktail} 
                        size="1x"
                        className="search-icon-logo"
                    />
                </div>
            </li>
        );
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

    const addIngredientCard = () => {
        const strIngredient = 'strIngredient';
        const strDescription = 'strDescription';
        const strType = 'strType';

        return (
            <li className="ingredient-card">
                <p className="bold-text">
                    {props.ingredients[0][strIngredient]}
                </p>
                
                <p>
                <span className="bold-text">Description: </span> {props.ingredients[0][strDescription] || '-'}
                </p>
                
                <p>
                    <span className="bold-text">Type:</span> {props.ingredients[0][strType] || '-'}
                </p>
            </li>
        )
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
                    onChange={(e) => {
                        updateSearch(e);
                    }}
                    onBlur={() => {}}
                />

                <span 
                    className="search-btn"
                    onClick={() => {
                        props.fetchSearchCocktails(
                        addSearchParams());
                    }}
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
                        onChange={() => {
                            search &&
                            props.fetchSearchCocktails(
                            addSearchParams());
                        }}
                    />
                    <span>By drink name</span>
                </label> 

                <label>
                    <input 
                        type="radio" 
                        name="search-by" 
                        value="2" 
                        onChange={() => {
                            search &&
                            props.fetchSearchCocktails(
                            addSearchParams());
                        }}
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
                    {addIngredientCard()}
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