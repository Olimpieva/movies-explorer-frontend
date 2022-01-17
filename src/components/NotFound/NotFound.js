import React from "react";

const NotFound = () => {

    return (
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Страница не найдена</p>
            <button className="not-found__button-back">Назад</button>
        </section>
    );
}

export default NotFound;