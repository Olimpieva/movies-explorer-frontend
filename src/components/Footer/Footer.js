import React from "react";

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__info">
                <p className="footer__copyright"> 2021</p>
                <ul className="footer__menu">
                    <li className="footer__menu-item">
                        <a href="https://praktikum.yandex.ru/" className="footer__link" target="_blank"
                            rel="noopener noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__menu-item">
                        <a href="http://github.com/" className="footer__link" target="_blank"
                            rel="noopener noreferrer">Github</a>
                    </li>
                    <li className="footer__menu-item">
                        <a href="https://telegram.org/" className="footer__link" target="_blank"
                            rel="noopener noreferrer">Telegram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;