import React, {Fragment} from 'react';

export const Home = () => {
    return (
        <Fragment>
            <div className="wrap">
                <h1 className="homepage-title">Cocktail App</h1>

                <section className="content">
                    <div className="content-quotes"></div>
                    <div className="content-img"></div>
                </section>
            </div>
        </Fragment>
    )
}