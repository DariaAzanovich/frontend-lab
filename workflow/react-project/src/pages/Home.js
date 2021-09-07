import React, {Fragment, useState} from 'react';
import { Quote } from '../components/Quote';
import './Home.css';
import Modal from '../components/Modal';

export const Home = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <Fragment>
            {openModal && <Modal closeModal={setOpenModal}/>}

            <div className="wrap">
                <h1 className="homepage-title">Cocktail App</h1>

                <section className="content">
                    <div className="content-quotes">
                        <Quote />
                    </div>
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
        </Fragment>
    )
}