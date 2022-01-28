import React from "react";

import pointerIcon from "../../images/pointer-icon.svg";

import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title"> Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">Статичный сайт
                    <a
                        className="portfolio__item-link"
                        href="https://github.com/Olimpieva/how-to-learn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="portfolio__logo" src={pointerIcon} alt="arrow"></img>
                    </a>
                </li>

                <li className="portfolio__item">Адаптивный сайт
                    <a
                        className="portfolio__item-link"
                        href="https://Olimpieva.github.io/russian-travel/index.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="portfolio__logo" src={pointerIcon} alt="arrow"></img>
                    </a>
                </li>

                <li className="portfolio__item">Одностраничное приложение
                    <a
                        className="portfolio__item-link"
                        href="https://mesto-project.nomoredomains.rocks/sign-in"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="portfolio__logo" src={pointerIcon} alt="arrow"></img>
                    </a>

                </li>

            </ul>

        </div>

    );
};

export default Portfolio;