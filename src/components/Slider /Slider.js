import React from 'react';

function Slider() {


    return <div id="myNav" className="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
        <div className="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    </div>

}

export default Slider;
