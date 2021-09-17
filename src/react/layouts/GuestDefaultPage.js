import React from 'react';
import TinySlider from "tiny-slider-react";
import NavBar from "../../components/NavBar/NavBar";
import {Link} from "react-router-dom";


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
            if (this.ts != null) {
                if (scrollDir > 0) {
                    this.ts.slider.goTo('next');
                    // this.ts.slider.animateIn();
                } else {
                    this.ts.slider.goTo('prev');
                }
            }
        });
    };


    render() {

        const settings = {
            container: '.slider__div',
            navItems: false,
            // viewportMax: true,
            // mode: 'gallery',
            lazyload: true,
            nav: false,
            mouseDrag: true,
            axis: 'vertical',
            preventScrollOnTouch: 'force',
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            speed: 2000,
            swipeAngle: false,
            controls: false,
            // prevButton: true,
            // nextButton: true,
        };

        const imgs = [
            {
                style: {
                    backgroundImage: `url("Images/Commercial.jpg")`,
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    transition: "opacity 50s ease-in"
                },
                title: "Commercial"
            },
            {
                style: {
                    backgroundImage: `url("Images/Technical.jpg")`,
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    transition: "opacity 50s ease-in"
                },
                title: "Technical"
            },
            {
                style: {
                    backgroundImage: `url("Images/Personal.jpg")`,
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    transition: "opacity 50s ease-in"
                },
                title: "Personal"

            }];
        return (<div className="slider__div">
            <TinySlider settings={settings} ref={ts => this.ts = ts}>
                {imgs.map((el, index) => (
                    <div key={index} style={{position: "relative"}}>
                        <div loading="lazy" style={el.style} className="bg-Image">
                            <NavBar/>
                            <div className="menuBot">
                                <hr className="header__line"/>
                                <br/>
                                <h1 className="header__text">{el.title}</h1>
                                <div className="header__button">
                                    <Link style={{textDecoration: 'none'}} id="header__router" to={el.title}>
                                        <h4 className="header__router__text">Explore</h4>
                                        <button>--></button>
                                    </Link>
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
