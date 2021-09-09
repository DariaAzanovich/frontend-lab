import './Home.css';
import './pagesMedia.css'
import QuotesCarousel from '../components/QuotesCarousel';
import qoutesArr from '../components/quotesArr';
import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import Modal from '../components/Modal';

export const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="wrap">
                {openModal && <Modal modalState={setOpenModal}/>}

                <Navbar modalState={setOpenModal}/>
                <h1 className="homepage-title">Cocktail App</h1>

                <section className="content">
                        <QuotesCarousel data={qoutesArr}/>
                    <div className="content-cocktail">
                        <img 
                            className="content-img" 
                            alt="Green cocktail" 
                            src="./green-cocktail.png"
                            onClick={() => {
                                setOpenModal(true)
                            }}
                        />
                        <p className="content-prompt">Press on glass to get a random cocktail</p>
                    </div>
                </section>
            </div>
        </>
    )
}