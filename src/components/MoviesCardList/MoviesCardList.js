import React from "react";
import { useLocation } from 'react-router-dom';

import MoviesCard from "../MoviesCard/MoviesCard";

import './MoviesCardList.css';

function MoviesCardList({ movies, onSaveMovie, onRemoveMovie }) {

    const location = useLocation();

    return (
        <ul className="movies-card-list">
            {movies.map((movie, index) => {
                return (
                    <MoviesCard
                        key={index + 1}
                        movie={movie}
                        location={location.pathname}
                        onMovieCardLike={onSaveMovie}
                        onMovieCardRemove={onRemoveMovie}
                    />
                );
            })}
        </ul>
    );
}
export default MoviesCardList;
