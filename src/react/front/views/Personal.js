import React from 'react';
import Header from "../../../components/Header/Header";

const imagePersonal = {
    backgroundImage: `url("Images/Personal.jpg")`,
    maxHeight: '100vh',
    backgroundSize: 'cover',
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    zIndex: '444',

    // paddingTop: '1%'
}

function Personal() {
    return (
        <div className="personal" style={imagePersonal}>
            <Header name="PERSONAL"/>
            <div className="bgDark">
                <div className="CommercialInfo ">
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
        </div>
    )
}

export default Personal;
