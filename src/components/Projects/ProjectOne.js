import React from 'react';
// import {Link} from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import {SidebarData} from "../NavBar/SideBarData";
// import {IconContext} from "react-icons";
import NavBar from "../NavBar/NavBar";

const imageProjectOne = {
    backgroundImage: `url("Images/Personal.jpg")`,
    height: '687px',
    backgroundSize: 'cover',
    // position: 'absolute',
    backgroundRepeat: 'no-repeat',
    zIndex: '444',
    backgroundPosition: "center"
}

function ProjectOne() {
    return (
        <div className="project__page">
            <div style={imageProjectOne} className="project__header">
                <NavBar/>
                <h1>PROJECT ONE</h1>
            </div>
            <div className="project__main">

                    <img src="Images/commercial/B1.jpg" alt="Project"/>

                <div className="main__text">
                    <h2>Project 1</h2>
                    <p>Tailer fornisce un contributo completo ad i brand che ci contattano per valorizzare i propri
                        prodotti, si differenzia dai competitor per la ricerca creativa e la sensibilità di lettura del
                        prodotto. Lo studio può lavorare in collaborazione con il tema Marketing del brand, o
                        contribuire con servizi di consulenza creativa. Le attività dello studio sono organizzate per la
                        creazione di immagini video e fotografiche destinate al modo social advertising e </p>
                </div>
            </div>
            <div className="project__images">
                <img src="Images/tech/ricci social4391.jpg" alt="Project "/>
                <img src="Images/tech/ricci social4391.jpg" alt="Project "/>
                <img src="Images/tech/ricci social4391.jpg" alt="Project "/>
                <img src="Images/tech/ricci social4391.jpg" alt="Project "/>
            </div>
            <div className="noMargin__CommercialInfo">
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
        </div>
    )
}

export default ProjectOne;
