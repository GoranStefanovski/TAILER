import React from 'react';
// import NavBar from "../../../components/NavBar/NavBar";
import ProgressBar from './ProgressBar';

function ProgressRow() {
    return (
        <div className="progress">
            <div className="progress__row">
                <div>
                    <ProgressBar valueEndProp="75"/>
                    <span>Example</span>
                </div>
                <div>
                    <ProgressBar valueEndProp="75"/>
                    <span>Example</span>
                </div>
                <div>
                    <ProgressBar valueEndProp="75"/>
                    <span>Example</span>
                </div>
                <div>
                    <ProgressBar valueEndProp="75"/>
                    <span>Example</span>
                </div>
            </div>
        </div>
    )
}

export default ProgressRow;
