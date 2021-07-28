import React from 'react';
import './GuestDefaultPage.css';
import TinySlider from "tiny-slider-react";

function GuestDefaultPage() {
    const settings = {
        lazyload: true,
        nav: false,
        mouseDrag: true,
        axis: 'vertical',
        preventScrollOnTouch: 'auto',
    };


    // sega ke bidi array = {stil =>{}, naslov = "BlaBla"}
    const imgs = [{
        backgroundImage: `url("Images/commercial.jpg")`,
        height: '100vh',
    }, {
        backgroundImage: `url("Images/Technical.jpg")`,
        height: '100vh'
    }, {
        backgroundImage: `url("Images/Personal.jpg")`,
        height: '100vh'
    }];

    return <div>
        <TinySlider settings={settings}>
            {imgs.map((el, index) => (
                <div key={index} style={{position: "relative"}}>
                    <div style={el}>
                    </div>
                </div>
            ))}
        </TinySlider>
    </div>
}

export default GuestDefaultPage;
