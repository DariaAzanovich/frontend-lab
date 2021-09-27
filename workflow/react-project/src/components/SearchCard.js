import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { showCocktailModal } from '../redux/action-creators/modalActions';

const SearchCard = (props) => {
    const {cardIndex, cardImgSrc, cocktailName, isAlco, setCardKey} = props;

    const ageLimit = {
        alco: '18+',
        noAlco: '0+'
    };
    const agePrompt = {
        alco: 'Contain alcohol',
        noAlco: 'No alcohol'
    }

    const showCocktailInfo = () => {
        setCardKey(cardIndex);
        props.showCocktailModal();          
    }

    return (
        <li className="cocktail-card" key={cardIndex}>
            <img className="cocktail-search-img" src={cardImgSrc} alt={cocktailName} />

            <span 
                className="cocktail-search-name"
                onClick={showCocktailInfo}
            >
                {cocktailName}
            </span>

            <div className="cocktail-search-icons">
                <span className="search-icon-age">
                    {isAlco ? ageLimit.alco : ageLimit.noAlco}
                    <div className="dropdown-prompt">
                        <span>{isAlco ? agePrompt.alco : agePrompt.noAlco}</span>
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

const mapDispatchToProps = { showCocktailModal };

export default connect(null, mapDispatchToProps)(SearchCard);