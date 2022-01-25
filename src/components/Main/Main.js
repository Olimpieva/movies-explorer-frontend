import React from "react";
import { NavLink } from "react-router-dom";

import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Tech from "../Tech/Tech";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

import './Main.css';


function Main() {
    console.log("MAIN PAGE")
    return (
        <div className="main-page">
            <header className="main-page__header">
                <Logo />
                <NavLink className="main-page__link main-page__link_type_register" to="/signup"> Регистрация </NavLink>
                <NavLink className="main-page__link main-page__link_type_login" to="/signin"> Войти </NavLink>
            </header>
            <main className="main">
                <Promo />
                <AboutProject />
                <Tech />
                <AboutMe />
            </main>
            <Footer />
        </div>
    );
};

export default Main;