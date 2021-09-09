import './QuotesCarousel.css';
import './media.css';
import React, { Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import qoutesArr from './quotesArr';


const ReactCarousel = () => {
    return (
        <Carousel 
            infiniteLoop 
            autoPlay 
            centerMode
            axis="vertical"
            dynamicHeight={true}
            showArrows={false} 
            showThumbs={false} 
            showIndicators={false} 
            showStatus={false} 
            // transitionTime={5000}
            className="carousel-wrap"
        >
             {qoutesArr.map((item, i) => (
                <Fragment>
                    <p
                        className="quote"
                        key={i}
                    >
                        {item}
                    </p>
                </Fragment>
                ))}
        </Carousel>
    )
}

export default ReactCarousel;