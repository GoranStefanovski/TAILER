import React from 'react';
import NavBar from "../../../components/NavBar/NavBar";
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
function ProgressRow(){
    return (
        <div className="technical">
            <NavBar/>
            <ProgressBar valueEndProp="25"/>
            <ProgressBar valueEndProp="43"/>
            <ProgressBar valueEndProp="53"/>
            <h1>cicina</h1>
        </div>
    )
}

export default ProgressRow;
