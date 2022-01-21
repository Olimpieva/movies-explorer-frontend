import React from "react";

import NavTab from "../NavTab/NavTab";

import landingLogo from "../../images/landing-logo.svg";
import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <img
                className="promo__logo"
                alt="Каллиграмма земного шара"
                src={landingLogo}
            />
            <div className="promo__info">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <NavTab />
            </div>
        </section>
    );
};

export default Promo;