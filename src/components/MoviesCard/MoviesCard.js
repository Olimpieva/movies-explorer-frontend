import React, { useContext } from "react";

import { CurrentSavedMoviesContext } from '../../context/CurrentSavedMoviesContext';

import './MoviesCard.css';

function MoviesCard(props) {
    const { movie, location, onMovieCardLike, onMovieCardRemove } = props;

    const savedMovies = useContext(CurrentSavedMoviesContext);
    const isLiked = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
    const imageLink = location === '/movies' ? 'https://api.nomoreparties.co' + movie.image.url : movie.image;
    const thumbnailLink = location === '/movies' ? 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url : movie.thumbnail;
    const trailerLink = movie.trailerLink || movie.trailer;
    const duration = `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`;

    function handleMovieCardLike() {
        onMovieCardLike({
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN || 'Неизвестно',
            description: movie.description,
            duration: movie.duration,
            year: movie.year,
            country: movie.country || 'Неизвестно',
            director: movie.director || 'Неизвестно',
            image: imageLink,
            trailer: trailerLink,
            thumbnail: thumbnailLink,
        })
    }

    function handleMovieCardRemove() {
        onMovieCardRemove(movie)
    }

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
                    <button className={`movies-card__button movies-card__button_type_like ${isLiked && 'movies-card__button_type_like_active'}`}
                        onClick={handleMovieCardLike} />
                ) : (
                    <button className="movies-card__button movies-card__button_type_removal"
                        onClick={handleMovieCardRemove} />
                )}
            </div>
        </li>

    );
};

export default MoviesCard;