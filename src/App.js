import './App.css';
import React from 'react';
import Comercial from './Images/commercial.jpg';
import Technical from './Images/Technical.jpg';
import Personal from './Images/Personal.jpg';
// import GuestDefaultPage from './react/layouts/GuestDefaultPage.js';
import Carousel from 'react-tiny-slider'

// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/vertical.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {title: 'First Shit', images: Personal, description: 'Kuro', button: 'Read more'},
    {title: 'First Shit', images: Technical, description: 'Kuro', button: 'Read more'},
    {title: 'First Shit', images: Comercial, description: 'Kuro', button: 'Read more'},
]


function App() {
    return <Carousel
        swipeAngle={false}
        items={3}
        mouseDrag
        ref={carousel}
        controls={false}
        nav={false}
    >
        {slides.map((slide) => {
            return <div>
                <div className={'slide'}>{slide}</div>
            </div>
        })}
    </Carousel>

}

export default App;
