import React, {Fragment} from 'react';
import { Quote } from '../components/Quote';
import './Home.css';

export const Home = ({ closeModal }) => {
    return (
        <Fragment>
            <div className="wrap">
                <h1 className="homepage-title">Cocktail App</h1>

                <section className="content">
                    {/* <div className="content-quotes"> */}
                        <Quote />
                    {/* </div> */}
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