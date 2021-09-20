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
                    <ProgressRow/>
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
                            <br/>
                            <br/>
                            Le abilità di Tailer aiutano a semplificare e velocizzare le attività di gestione del
                            settore
                            e-commerce, rispettando sempre le indicazioni che il cliente ci fornisce.
                        </p>
                    </div>
                </div>

                <div className="TechImageRow">
                    <div>
                        <img src="Images/tech/Social__0122_2.jpg" alt="madinja"/>
                        <img src="Images/tech/Social__0176.jpg" alt="madinja"/>
                    </div>
                    <div className="TechImageRow__below">
                        <img src="Images/tech/ricci social4391.jpg" alt="madinja"/>
                        <img src="Images/tech/Social__0072a.jpg" alt="madinja"/>
                    </div>
                </div>
                <br/>
                <div className="TechImageRow">
                    <div>
                        <img id="first__clock" src="Images/tech/L_D_6b.jpg" alt="madinja"/>
                        <img id="second__clock" src="Images/tech/L_D_2.jpg" alt="madinja"/>
                    </div>
                    <div id="marginTop">
                        <img src="Images/tech/L_D_5.jpg" alt="madinja"/>
                        <img src="Images/tech/L_D_6.jpg" alt="madinja"/>
                    </div>
                </div>
                <br/>
                <div className="position__quote">
                    <img className="quote__image" src="Images/tech/quotes.png" alt="quotes" />
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
                    <div id="marginTop">
                        <img src="Images/tech/Social__0122_2.jpg" alt="madinja"/>
                        <img src="Images/tech/Social__0176.jpg" alt="madinja"/>
                    </div>
                    <div className="TechImageRow__below">
                        <img src="Images/tech/ricci social4391.jpg" alt="madinja"/>
                        <img src="Images/tech/Social__0072a.jpg" alt="madinja"/>
                    </div>
                </div>
                <br/>
                <div className="TechImageRow">
                    <div>
                        <img id="first__clock" src="Images/tech/L_D_6b.jpg" alt="madinja"/>
                        <img id="second__clock" src="Images/tech/L_D_2.jpg" alt="madinja"/>
                    </div>
                    <div id="marginTop">
                        <img src="Images/tech/L_D_5.jpg" alt="madinja"/>
                        <img src="Images/tech/L_D_6.jpg" alt="madinja"/>
                    </div>
                </div>
                <div className="noMargin__CommercialInfo">
                    <div className="svg__row">
                        <svg width="482" height="856" viewBox="0 0 482 856" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M-305.994 456.441L-131.354 155.009L217.013 155.536L390.741 457.494L216.101 758.926L-132.267 758.399L-305.994 456.441Z"
                                stroke="#F3F3F3" stroke-width="6"/>
                        </svg>
                        <svg id="svg__two" width="515" height="890" viewBox="0 0 515 890" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M-334.448 489.93L-145.48 163.768L231.468 164.339L419.448 491.07L230.48 817.231L-146.468 816.661L-334.448 489.93Z"
                                stroke="#BEBEBE"/>
                        </svg>
                    </div>
                    <div>
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
                    <div id="svg__row__right">
                        <svg width="584" height="890" viewBox="0 0 584 890" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M95.5522 489.93L284.52 163.768L661.468 164.339L849.448 491.07L660.48 817.231L283.532 816.661L95.5522 489.93Z"
                                stroke="#BEBEBE"/>
                        </svg>
                        <svg width="552" height="856" viewBox="0 0 552 856" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M92.0056 456.441L266.646 155.009L615.013 155.536L788.741 457.494L614.101 758.926L265.733 758.399L92.0056 456.441Z"
                                stroke="#F3F3F3" stroke-width="6"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technical;
