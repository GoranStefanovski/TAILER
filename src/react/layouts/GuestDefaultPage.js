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
                                        <svg width="107" height="111" viewBox="0 0 107 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.1807 55.655L33.4179 20.6032L73.8922 20.6032L94.1294 55.655L73.8922 90.7069L33.4179 90.7069L13.1807 55.655Z" stroke="white" stroke-width="3"/>
                                        </svg>


                                        <svg id="defaultExplore" width="122" height="127" viewBox="0 0 122 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3296 63.2522L37.2909 21.75L85.2136 21.75L109.175 63.2522L85.2136 104.754L37.2909 104.754L13.3296 63.2522Z" stroke="white"/>
                                        </svg>
                                        <svg id="button__arrow" width="37" height="35" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2554 0.437513L28.4064 9.94375C28.968 10.5271 28.968 11.4729 28.4064 12.0562L19.2554 21.5625C18.6939 22.1458 17.7834 22.1458 17.2218 21.5625C16.6603 20.9791 16.6603 20.0333 17.2218 19.45L23.9181 12.4938C23.9181 12.4938 3.51555 12.4938 1.50667 12.4938C-0.502218 12.4938 -0.502227 9.50624 1.50667 9.50624C3.51556 9.50624 23.9181 9.50624 23.9181 9.50624L17.2218 2.55001C16.6603 1.96666 16.6603 1.02086 17.2218 0.437513C17.7834 -0.145838 18.6939 -0.145838 19.2554 0.437513Z" fill="white"/>
                                        </svg>
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
