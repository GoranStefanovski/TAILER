import React from 'react';
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import BackToHomeBtn from "../Buttons/BackToHomeBtn";

function Header(props) {
    const path = useLocation().pathname;
    const location = path.split("/")[1];
    return (
        <div className={"header" + location}>
            <div className="header__container">
            <NavBar/>
                <h1 className="header__container__text">{props.name}</h1>
                <BackToHomeBtn />
            </div>
        </div>
    );
}

export default Header;
