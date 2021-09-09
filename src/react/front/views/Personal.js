import React from 'react';
import Header from "../../../components/Header/Header";

const imagePersonal = {
    backgroundImage: `url("Images/Personal.jpg")`,
    height: '100vh',
    position: 'absolute',
    // paddingTop: '1%'
}

function Personal(){
    return (
        <div className="personal" style={imagePersonal}>
            <Header/>
            <div className="CommercialInfo bgDark">
                <div className="logoColorDiv paddingTop">
                    <img className="logoColor" src="Images/logoColor.png" alt="Tailer Logo"/>
                </div>
                <div className="CommercialInfoText">
                    <h5>Lorem ipsun dolor sit ament, consectur ament elite.</h5>
                    <h5>Ust de labore aqua aliqua</h5>
                    <h6>Office: + 1 (111) 11-11-11</h6>
                    <h6>example@gmail.com</h6>
                </div>
            </div>
        </div>
    )
}

export default Personal;
