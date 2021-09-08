import './Home.css';
import './pagesMedia.css'
import QuotesCarousel from '../components/QuotesCarousel';
import qoutesArr from '../components/quotesArr';
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export const Home = ({ closeModal }) => {
    return (
        <Fragment>
            <div className="wrap">
                <h1 className="homepage-title">Cocktail App</h1>

                <section className="content">
                        <QuotesCarousel data={qoutesArr}/>
                    <div className="content-cocktail">
                        <img 
                            className="content-img" 
                            alt="Green cocktail" 
                            src="./green-cocktail.png"
                            onClick={() => {
                                closeModal(true)
                            }}
                        />
                        <p className="content-prompt">Press on glass to get a random cocktail</p>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

Home.propTypes = {
    closeModal: PropTypes.func.isRequired
};