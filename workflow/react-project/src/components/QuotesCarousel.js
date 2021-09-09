import './QuotesCarousel.css';
import './media.css';
import React, { useState, useEffect } from 'react';
import qoutesArr from './quotesArr';


function Carousel() {
    const [currQuote, setCurrQuote] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrQuote(currQuote === qoutesArr.length - 1 ? 0 : currQuote + 1);
        }, 5000);

        return function cleanUp() {
            clearInterval(timer);
        }
    })

    return (
        <section className="carousel-wrap">
            {qoutesArr.map((item, i) => (
            <>
                <p
                    className={i === currQuote ? "quote selected" : "quote"}
                    key={i}
                    style={{
                        transform: `translate3d(0, -${(currQuote) * 100}%, 0)`,
                        transition: 'all 2s'
                    }}
                >
                    {item}
                </p>
            </>
            ))}
        </section>
    )
}

export default Carousel
