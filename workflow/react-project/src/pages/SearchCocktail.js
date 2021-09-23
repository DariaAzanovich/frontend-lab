import './SearchCocktail.css';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import { connect } from 'react-redux';
import RandomCocktail from '../components/RandomCocktail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail, faSearch } from '@fortawesome/free-solid-svg-icons';
import { showCocktailModal } from '../redux/action-creators/modalActions';
import Loader from '../components/Loader';
import { fetchSearchCocktails } from '../redux/action-creators/searchCocktailActions';
import { debounce } from 'lodash';
import { SEARCH_MODAL_TYPE } from '../redux/types';

const SearchCocktail = (props) => {
    const [search, setSearch] = useState('');
    const [key, setKey] = useState(null);

    const updateSearch = (event) => {
        setSearch(event.target.value);
    }

    // console.log(props.cocktails);
    // const debounced = debounce(() => console.log('Hello'), 3000);

    const setCardsAmount = (n) => {
        let cards = [];
        for(let i = 0; i < n; i++) {
            const src = props.cocktails[i].strDrinkThumb;
            const cocktailName = props.cocktails[i].strDrink;
            
            cards.push(addSearchCard(i, src, cocktailName));
        }

        return cards;
    }

    const addSearchCard = (i, src, name) => {
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
                        18+
                        <div className="dropdown-prompt">
                            <span>Contain alcohol</span>
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

    const setSearchParams = () => {
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
                    <RandomCocktail type={SEARCH_MODAL_TYPE} cocktailKey={key}/>
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
                        // debounced();
                    }}
                    onBlur={() => {}}
                />

                <span 
                    className="search-btn"
                    onClick={() => {
                        props.fetchSearchCocktails(
                        setSearchParams());
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
                            setSearchParams());
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
                            setSearchParams());
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

            {!props.loader && props.cocktails.length === 0 &&
                <span className="empty-search">There will be search results</span>
            }
        </section>
    )
}

const mapStateToProps = state => {
    return {
        modalState: state.modal.showCocktailModal,
        loader: state.search.loader,
        cocktails: state.search.cocktails
    };
    
};

const mapDispatchToProps = { 
    showCocktailModal,
    fetchSearchCocktails
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCocktail);