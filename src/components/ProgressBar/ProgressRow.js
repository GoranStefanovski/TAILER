import React from 'react';
// import NavBar from "../../../components/NavBar/NavBar";
import ProgressBar from './ProgressBar';

function ProgressRow() {
    return (
        <div className="progress">
            <div className="progress__left">
                <img src="Images/tech/vision.png" alt="Vision"/>
            </div>
            <div className="progress__right">
                <div className="progress__right__text">
                    <p>L'essenza di un prodotto deve essere immediatamente evidente dalla qualità visiva e
                        dall'intensità di un'immagine se vuole attirare l'interesse del consumatore online di oggi. Per
                        questo abbiamo sviluppato un reparto che si occupa esclusivamente di e-commerce. Fotografi ed
                        editori altamente specializzati lavorano contemporaneamente in qualità e quantità, per gestire
                        abilmente grandi volumi di immagini di prodotti di lusso.</p>
                </div>
                <div className="progress__row" loading="lazy">
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
        </div>
    )
}

export default ProgressRow;
