import React from 'react';
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Header() {
    const path = useLocation().pathname;
    const location = path.split("/")[1];
    return (
        <div className={"header " + location}>
            <NavBar/>
        </div>
    );
}

export default Header;