import React from "react";

import SectionTitle from "../SectionTitle/sectionTitle";

function Tech() {
    return (
        <section className="tech">
            <SectionTitle titleText="Технологии" />
            <h3 className="tech__subtitle">7 технологий</h3>
            <p className="tech__description">На курсе веб-разработки мы освоили технологии,
                которые применили в дипломном проекте.</p>
            <ul className="tech__list">
                <li className="techs__item">HTML</li>
                <li className="techs__item">CSS</li>
                <li className="techs__item">JS</li>
                <li className="techs__item">React</li>
                <li className="techs__item">Git</li>
                <li className="techs__item">Express.js</li>
                <li className="techs__item">mongoDB</li>
            </ul>
        </section>
    );
};

export default Tech;