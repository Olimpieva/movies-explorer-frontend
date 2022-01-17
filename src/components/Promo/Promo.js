import React from "react";

import NavTab from "../NavTab/NavTab";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <img
                    className="promo__logo"
                    alt="картинка земного шара"
                    src="#"
                />
            </div>
            <NavTab />
        </section>
    );
};

export default Promo;