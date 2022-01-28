import React, { useContext } from "react";

import { CurrentSavedCardsContext } from '../../context/CurrentSavedCardsContext';

import './MoviesCard.css';

function MoviesCard(props) {
    const { movie, location } = props;

    const savedMovies = useContext(CurrentSavedCardsContext);
    const isLiked = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
    const imageLink = location === '/movies' ? 'https://api.nomoreparties.co' + movie.image.url : movie.image;
    const trailerLink = location === '/movies' ? movie.trailerLink : movie.trailer;
    const duration = `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`;

    return (
        <li className="movies-card">
            <a
                className="movies-card__link"
                href={trailerLink}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="movies-card__image"
                    src={imageLink}
                    alt={`Постер к фильму ${movie.nameRU}`}
                />
            </a>

            <div className="movies-card__container">
                <h2 className="movies-card__title">{movie.nameRU}</h2>
                <p className="movies-card__duration">{duration}</p>
                {location === '/movies' ? (
                    <button className={`movies-card__button movies-card__button_type_like ${isLiked && 'movies-card__button_type_like_active'}`} />
                ) : (
                    <button className="movies-card__button movies-card__button_type_removal" />
                )}
            </div>
        </li>

    );
};

export default MoviesCard;