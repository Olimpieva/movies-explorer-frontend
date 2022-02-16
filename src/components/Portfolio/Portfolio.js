import React from "react";

import pointerIcon from "../../images/pointer-icon.svg";

import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title"> Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a
                        className="portfolio__item-link"
                        href="https://github.com/Olimpieva/how-to-learn"
                        target="_blank"
                        rel="noreferrer"
                    >Статичный сайт
                        <img className="portfolio__logo" src={pointerIcon} alt="arrow"></img>
                    </a>
                </li>

                <li className="portfolio__item">
                    <a
                        className="portfolio__item-link"
                        href="https://github.com/Olimpieva/russian-travel"
                        target="_blank"
                        rel="noreferrer"
                    >Адаптивный сайт
                        <img className="portfolio__logo" src={pointerIcon} alt="arrow"></img>
                    </a>
                </li>

                <li className="portfolio__item">
                    <a
                        className="portfolio__item-link"
                        href="https://github.com/Olimpieva/react-mesto-api-full"
                        target="_blank"
                        rel="noreferrer"
                    >Одностраничное приложение
                        <img className="portfolio__logo" src={pointerIcon} alt="arrow"></img>
                    </a>

                </li>

            </ul>

        </div>

    );
};

export default Portfolio;