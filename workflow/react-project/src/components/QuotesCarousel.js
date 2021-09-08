import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './QuotesCarousel.css';

const QuotesCarousel = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    // Used to determine which items appear above the active item
    const halfwayIndex = Math.ceil(data.length / 2);
  
    // Usd to determine the height/spacing of each item
    const itemHeight = 240;
  
    // Used to determine at what point an item is moved from the top to the bottom
    const shuffleThreshold = halfwayIndex * itemHeight;
  
    // Used to determine which items should be visible. this prevents the "ghosting" animation
    const visibleStyleThreshold = shuffleThreshold / 2;
  
    const determinePlacement = (itemIndex) => {
      // If these match, the item is active
        if (activeIndex === itemIndex) {
            return 0;
        }
  
        if (itemIndex >= halfwayIndex) {
            if (activeIndex > itemIndex - halfwayIndex) {
                return (itemIndex - activeIndex) * itemHeight;
            } else {
                return -(data.length + activeIndex - itemIndex) * itemHeight;
            }
        }
    
        if (itemIndex > activeIndex) {
            return (itemIndex - activeIndex) * itemHeight;
        }
  
        if (itemIndex < activeIndex) {
            if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
                return (data.length - (activeIndex - itemIndex)) * itemHeight;
            }
            return -(activeIndex - itemIndex) * itemHeight;
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => {
                if (prevIndex + 1 > data.length - 1) {
                  return 0;
                }
                return prevIndex + 1;
            });
        }, 5000);

        return function cleanUp() {
            clearInterval(timer);
        }
    })
  
    return (
        <Fragment>
            <div className="carousel">
                {data.map((item, i) => (
                    <Fragment>
                        <p
                            className={cn("carousel-item", {
                                active: activeIndex === i,
                                visible:
                                Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                            })}
                            key={i}
                            style={{
                                transform: `translateY(${determinePlacement(i)}px)`,
                                // opacity: '0.5',
                                // filter: 'blur(2px)'
                            }}
                        >
                            {item}
                        </p>
                    </Fragment>
                ))}
            </div>
      </Fragment>
    );
  };
  
QuotesCarousel.propTypes = {
    data: PropTypes.array.isRequired
};
  
export default QuotesCarousel;
