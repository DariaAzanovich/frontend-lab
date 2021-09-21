import './Home.css';
import './pagesMedia.css'
import React from 'react';
import Modal from '../components/Modal';
import QuotesCarousel from '../components/QuotesCarousel';
import RandomCocktail from '../components/RandomCocktail';
import { connect } from 'react-redux';
import { showCocktailModal } from '../redux/action-creators/modalActions';
import { ToastContainer } from 'react-toastify';

const Home = (props) => {
    return (
        <>
            <div className="wrap">
                <ToastContainer />
                {props.modalState && 
                <Modal title="Random Cocktail">
                    <RandomCocktail/>
                </Modal>}

                <h1 className="homepage-title">Cocktail App</h1>

                <section className="content">
                        <QuotesCarousel></QuotesCarousel>
                    <div className="content-cocktail">
                        <img 
                            className="content-img" 
                            alt="Green cocktail" 
                            src="./green-cocktail.png"
                            onClick={props.showCocktailModal}
                        />
                        <p className="content-prompt">Press on glass to get a random cocktail</p>
                    </div>
                </section>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        modalState: state.modal.showCocktailModal
    };
    
};

const mapDispatchToProps = { 
    showCocktailModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);