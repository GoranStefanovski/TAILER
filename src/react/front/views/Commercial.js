import React from 'react';
import Header from "../../../components/Header/Header";
import ImageRow from '../../../components/ImageRow/ImageRow';
// import NavBar from "../../../components/NavBar/NavBar";
// import {Link} from "react-router-dom";
// import {background} from "../../../../../tailerOrg/wp-includes/js/codemirror/csslint";
const imagePersonal = {
    backgroundImage: `url("Images/Commercial.jpg")`,
    maxHeight: '100vh',
    // position: 'absolute',
    backgroundPosition: 'cover',

    zIndex: '444',
    // position: 'sticky',
}

function Commercial() {
    return (
        <div className="commercial"  style={imagePersonal}>
                <div>
                <Header/>
            </div>
            <div className="bgDark">
            <ImageRow/>
            </div>
        </div>
    )
}

export default Commercial;
//
