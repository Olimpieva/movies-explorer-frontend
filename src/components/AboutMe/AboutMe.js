import React from "react";

import SectionTitle from "../SectionTitle/sectionTitle";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return (
        <section className="about-me">
            <SectionTitle titleText="Студент" />
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ.
                У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <div className="about-me__social">
                <a
                    className="about-me__link"
                    href="https://telegram.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Telegram
                </a>
                <a
                    className="about-me__link"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </div>
            <Portfolio />

        </section>
    );
};

export default AboutMe;