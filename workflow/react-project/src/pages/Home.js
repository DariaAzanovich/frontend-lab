import './Home.css';
import './pagesMedia.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../components/Modal';
import QuotesCarousel from '../components/QuotesCarousel';
import RandomCocktail from '../components/RandomCocktail';

export const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            <div className="wrap">
                {openModal && <Modal modalState={setOpenModal} title="Random Cocktail" content={<RandomCocktail/>}/>}

                <h1 className="homepage-title">Cocktail App</h1>

                <section className="content">
                        <QuotesCarousel></QuotesCarousel>
                    <div className="content-cocktail">
                        <img 
                            className="content-img" 
                            alt="Green cocktail" 
                            src="./green-cocktail.png"
                            onClick={() => {
                                setOpenModal(true);
                            }}
                        />
                        <p className="content-prompt">Press on glass to get a random cocktail</p>
                    </div>
                </section>
            </div>
        </>
    )
}