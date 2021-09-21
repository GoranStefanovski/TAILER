import React from 'react'
import NavBarDark from "../../../components/NavBarDark/NavBarDark";

// import {background} from "../../../../../tailerOrg/wp-includes/js/codemirror/csslint";

const myTeam = [
    {
        image: "Images/commercial/B1.jpg",
        name: "John Doe",
        role: "CEO",
    },
    {
        image: "Images/commercial/B1.jpg",
        name: "John Doe",
        role: "CEO",
    },
    {
        image: "Images/commercial/B1.jpg",
        name: "John Doe",
        role: "CEO",
    }
]


function About() {
    return (
        <div className="about__page">
            <NavBarDark/>
            <h1 className="about__header">ABOUT US</h1>
            <div className="row content">
                <div className="col-md-12 flex">
                    <div className="col-md-2">
                        <img className="team__image" src="Images/about/team.png" alt="our team"/>
                    </div>
                    <div className="col-md-8">
                        <p className="team__paragraph">Tailer fornisce un contributo completo ad i brand che ci
                            contattano per valorizzare i propri
                            prodotti, si differenzia dai competitor per la ricerca creativa e la sensibilità di lettura
                            del prodotto. Lo studio può lavorare in collaborazione con il tema Marketing del brand, o
                            contribuire con servizi di consulenza creativa. Le attività dello studio sono organizzate
                            per la creazione di immagini video e fotografiche destinate al modo social advertising
                            e </p>
                    </div>
                </div>
            </div>
            <div className="row minusMargin">
                <div className="col-md-9 offset-3 flexTwo">
                    {
                        myTeam.map((el, index) => (
                                <div id="inside" key={index}>
                                    <img src={el.image} alt={el.name}/>
                                    <h4>{el.name}</h4>
                                    <h5>{el.role}</h5>
                                </div>
                            )
                        )}
                </div>
            </div>
            <div className="row flexTwo content">
                <div className="col-md-4 offset-1 about__work">
                    <img src="Images/about/HowWeWork.png" alt="HowWeWork"/>
                    <p>Tailer fornisce un contributo completo ad i brand che ci contattano per valorizzare i propri
                        prodotti, si differenzia dai competitor per la ricerca creativa e la sensibilità di lettura del
                        prodotto. Lo studio può lavorare in collaborazione con il tema Marketing del brand, o
                        contribuire con servizi di consulenza creativa. Le attività dello studio sono organizzate per la
                        creazione di immagini video e fotografiche destinate al modo social advertising e </p>
                </div>
                <div className="col-md-6 ">
                    <img id="workImage" src="Images/commercial/H3.jpg" alt="work" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <img id="fullImg" src="Images/Personal.jpg" alt="about" />
                </div>
            </div>
            <div className="noMargin__CommercialInfo">
                <div className="svg__row">
                    <svg width="482" height="856" viewBox="0 0 482 856" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-305.994 456.441L-131.354 155.009L217.013 155.536L390.741 457.494L216.101 758.926L-132.267 758.399L-305.994 456.441Z"
                            stroke="#F3F3F3" stroke-width="6"/>
                    </svg>
                    <svg id="svg__two" width="515" height="890" viewBox="0 0 515 890" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-334.448 489.93L-145.48 163.768L231.468 164.339L419.448 491.07L230.48 817.231L-146.468 816.661L-334.448 489.93Z"
                            stroke="#BEBEBE"/>
                    </svg>
                </div>
                <div>
                    <div className="logoColorDiv">
                        <img className="logoColor" src="Images/logoColor.png" alt="Tailer Logo"/>
                    </div>
                    <div className="black CommercialInfoText">
                        <h5>Lorem ipsun dolor sit ament, consectur ament elite.</h5>
                        <h5>Ust de labore aqua aliqua</h5>
                        <h6>Office: + 1 (111) 11-11-11</h6>
                        <h6>example@gmail.com</h6>
                    </div>
                </div>
                <div id="svg__row__right">
                    <svg width="584" height="890" viewBox="0 0 584 890" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M95.5522 489.93L284.52 163.768L661.468 164.339L849.448 491.07L660.48 817.231L283.532 816.661L95.5522 489.93Z"
                            stroke="#BEBEBE"/>
                    </svg>
                    <svg width="552" height="856" viewBox="0 0 552 856" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M92.0056 456.441L266.646 155.009L615.013 155.536L788.741 457.494L614.101 758.926L265.733 758.399L92.0056 456.441Z"
                            stroke="#F3F3F3" stroke-width="6"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default About;
