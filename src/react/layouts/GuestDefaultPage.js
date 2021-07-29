import React from 'react';
import './GuestDefaultPage.css';
import TinySlider from "tiny-slider-react";

// import Slider from "../../components/Slider /Slider";

function GuestDefaultPage() {
    const settings = {
        lazyload: true,
        nav: false,
        mouseDrag: true,
        axis: 'vertical',
        preventScrollOnTouch: 'auto',
    };

    // const imgs = [
    //     {
    //         style: {
    //             backgroundImage: `url("Images/commercial.jpg")`,
    //             height: '100vh',
    //         }
    //         title: 'one"
    //     },

    // sega ke bidi array = {stil =>{}, naslov = "BlaBla"}
    const imgs = [
        {
            style: {
                backgroundImage: `url("Images/commercial.jpg")`,
                height: '100vh',
            },
            title: "Commercial"
        },
        {
            style: {
                backgroundImage: `url("Images/Technical.jpg")`,
                height: '100vh',
            },
            title: "Techical"
        },
        {
            style: {
                backgroundImage: `url("Images/Personal.jpg")`,
                height: '100vh'
            },
            title: "Personal"

        }];

    return <div>
        <TinySlider settings={settings}>
            {imgs.map((el, index) => (
                <div key={index} style={{position: "relative"}}>
                    <div style={el.style}>
                        {/*<Slider/>*/}
                        <h1 className="header">{el.title}</h1>
                    </div>
                </div>
            ))}
        </TinySlider>
    </div>
}

export default GuestDefaultPage;
