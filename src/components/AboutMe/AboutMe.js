import React from "react";

import SectionTitle from "../SectionTitle/sectionTitle";
import Portfolio from "../Portfolio/Portfolio";
import studentImage from "../../images/mrRobot.jpg"

import './AboutMe.css';

function AboutMe() {

    return (
        <section className="about-me">
            <SectionTitle titleText="Студент" />
            <div className="about-me__info">
                <img alt='Фото студента' src={studentImage} className="about-me__image" />
                <h3 className="about-me__name">Мистер Робот</h3>
                <p className="about-me__career">Соучредитель и лидер хакерской группы FSociety, 30 лет</p>
                <p className="about-me__description">Работаю в компании по кибербезопасности Allsafe Cybersecurity.
                    Есть сестра и воображаемый отец. Социофоб.</p>
                <div className="about-me__social">
                    <a className="about-me__link" href="https://telegram.org" target="_blank"
                        rel="noopener noreferrer">Telegram</a>
                    <a className="about-me__link" href="https://github.com/" target="_blank"
                        rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
            <Portfolio />
        </section>
    );
};

export default AboutMe;