import React from "react";

function MoviesCard(props) {
    const { isLiked, isSavedMovies } = props;

    return (
        <li className="movies-card">
            <a target="_blank" href="www.ya.ru" rel="noreferrer">
                <img className="movies-card__img" alt="" />
            </a>

            <div className="movies-card__container">
                <h2 className="movies-card__title">Да</h2>
                {isSavedMovies ? (
                    <button className="movies-card__delete" />
                ) : (
                    <button className={`movies-card__like ${isLiked && 'movies-card__like_active'}`} />
                )}
                <p className="movies-card__subtitle"></p>
            </div>
        </li>

    );
};

export default MoviesCard;