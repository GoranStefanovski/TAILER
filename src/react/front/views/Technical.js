import React from 'react';
// import NavBar from "../../../components/NavBar/NavBar";
import Header from "../../../components/Header/Header";
import ProgressRow from "../../../components/ProgressBar/ProgressRow";

const imageTechnical = {
    backgroundImage: `url("Images/Technical.jpg")`,
    maxHeight: '100vh',
    backgroundSize: 'cover',
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    zIndex: '444',
    // position: 'sticky',
}

function Technical() {
    return (
        <div className="technical " style={imageTechnical}>
            <Header name="TECHNICAL"/>
            <div className="bgWhite">
                <div className="info">
                    <ProgressRow />
                </div>
                <div className="position">
                    <img className="position__image" src="Images/tech/SOVHIGS0-SUE-000_01-1 1.jpg" alt="Shtikla"/>
                    <div className="position__text">
                        <img className="position__image__text" src="Images/tech/CareForPositioning.png" alt="neshto"/>
                        <p>Un aspetto chiave di un buon layout di e-commerce è l'uniformità degli scatti. Solo pochi
                            gradi
                            di differenza tra una foto e l'altra possono creare dissonanza visiva. Fornire una coerenza
                            assoluta utilizzando attrezzature specializzate consente ai nostri fotografi esperti di
                            creare
                            dettagli di posizionamento perfetti , precisi, e costanti nel tempo, che soddisfano l'occhio
                            e
                            catturano l'attenzione del consumatore.

                            Le abilità di Tailer aiutano a semplificare e velocizzare le attività di gestione del
                            settore
                            e-commerce, rispettando sempre le indicazioni che il cliente ci fornisce.
                        </p>
                    </div>
                </div>

                <div className="TechImageRow marginTop">
                    <img src="Images/tech/Social__0122_2.jpg" alt="madinja"/>
                    <img src="Images/tech/Social__0176.jpg" alt="madinja"/>
                    <img src="Images/tech/ricci social4391.jpg" alt="madinja"/>
                    <img src="Images/tech/Social__0072a.jpg" alt="madinja"/>
                </div>
                <br/>
                <div className="TechImageRow">
                    <img src="Images/tech/L_D_6b.jpg" alt="madinja"/>
                    <img src="Images/tech/L_D_2.jpg" alt="madinja"/>
                    <img src="Images/tech/L_D_5.jpg" alt="madinja"/>
                    <img src="Images/tech/L_D_6.jpg" alt="madinja"/>
                </div>
                <br/>
                <div className="position__quote">
                    <p className="quote">…inviaci i tuoi prodotti, a tutto il resto pensiamo noi!</p>
                </div>
                <div className="material">
                    <div className="material__text">
                        <div className="material__text__header">
                            <h1 id="deal"><span>Deal</span> with</h1>
                            <h1 id="different">Different</h1>
                            <h1 id="materials">Materials</h1>
                        </div>
                    </div>
                    <div className="material__image">
                        <img src="Images/tech/L_D_2.jpg" alt="Nehsto"/>
                    </div>

                </div>
                <br/>
                <div className="TechImageRow marginTop">
                    <img src="Images/tech/Social__0122_2.jpg" alt="madinja"/>
                    <img src="Images/tech/Social__0176.jpg" alt="madinja"/>
                    <img src="Images/tech/ricci social4391.jpg" alt="madinja"/>
                    <img src="Images/tech/Social__0072a.jpg" alt="madinja"/>
                </div>
                <br/>
                <div className="TechImageRow">
                    <img src="Images/tech/L_D_6b.jpg" alt="madinja"/>
                    <img src="Images/tech/L_D_2.jpg" alt="madinja"/>
                    <img src="Images/tech/L_D_5.jpg" alt="madinja"/>
                    <img src="Images/tech/L_D_6.jpg" alt="madinja"/>
                </div>
                <div className="CommercialInfo">
                    <div className="logoColorDiv">
                        <img className="logoColor" src="Images/logoColor.png" alt="Tailer Logo"/>
                    </div>
                    <div className="black CommercialInfoText">
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

export default Technical;
