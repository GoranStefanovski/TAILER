import React from 'react';
import NavBar from "../../../components/NavBar/NavBar";
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
function Technical(){
    return (
        <div className="technical">
            <NavBar/>
            <ProgressBar valueEndProp="25"/>
            <ProgressBar valueEndProp="43"/>
            <ProgressBar valueEndProp="53"/>
            <h1>Technical</h1>
        </div>
    )
}

export default Technical;
