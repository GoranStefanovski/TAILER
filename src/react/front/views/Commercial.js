import React from 'react';
import Header from "../../../components/Header/Header";
import ImageRow from '../../../components/ImageRow/ImageRow';
// import NavBar from "../../../components/NavBar/NavBar";
// import {Link} from "react-router-dom";
// import {background} from "../../../../../tailerOrg/wp-includes/js/codemirror/csslint";
const imagePersonal = {
    backgroundImage: `url("Images/Commercial.jpg")`,
    maxHeight: '100vh',
    backgroundSize: 'cover',
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    zIndex: '444',
    backgroundPosition: "center"
}

function Commercial() {
    return (
        <div className="commercial"  style={imagePersonal}>
                <Header/>
            <div className="bgDark">
            <ImageRow/>
            </div>
        </div>
    )
}

export default Commercial;
//
