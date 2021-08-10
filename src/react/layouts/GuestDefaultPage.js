import React from 'react';
import TinySlider from "tiny-slider-react";
import NavBar from "../../components/NavBar/NavBar";

// import {BrowserRouter, Route, Switch} from 'react-router-dom';

class GuestDefaultPage extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.addEventListener('wheel', (event) => {
            let canScroll = true;
            if (!canScroll) {
                return;
            }

            canScroll = false;
            setTimeout(() => {
                canScroll = true;
            }, 250);

            let scrollDir = event.deltaY > 1 ? 1 : -1;

            if (scrollDir > 0) {
                this.ts.slider.goTo('next');
            } else {
                this.ts.slider.goTo('prev');
            }
        });
    };

    render() {

        const settings = {
            loop: true,
            rewind: false,
            mode: 'carousel',
            lazyload: true,
            nav: false,
            mouseDrag: true,
            axis: 'vertical',
            preventScrollOnTouch: 'force',
            animateIn: "jello",
            animateOut: "rollOut",
            speed: 1000,
            swipeAngle: false,
            controls: false
        };

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
                title: "Technical"
            },
            {
                style: {
                    backgroundImage: `url("Images/Personal.jpg")`,
                    height: '100vh'
                },
                title: "Personal"

            }];
        return (<div>
            <TinySlider settings={settings} ref={ts => this.ts = ts}>
                {imgs.map((el, index) => (
                    <div key={index} style={{position: "relative"}}>
                        <div style={el.style}>
                            <NavBar/>
                            <div className="menuBot">
                                <hr className="header__line"/>
                                <br/>
                                {/*<ScrollAnimation animateOut="fadeOut">*/}
                                <h1 className="header__text">{el.title}</h1>
                                {/*</ScrollAnimation>*/}
                                <div className="header__button">
                                    <div style={{textDecoration: 'none'}} id="header__router" path={el.title}
                                         component={el.title}>
                                        <h4 className="header__router__text">Explore</h4>
                                        <button>--></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </TinySlider>

        </div>)
    }
}

export default GuestDefaultPage;
