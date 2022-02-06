import React from "react";
import { useLocation } from 'react-router-dom';

import MoviesCard from "../MoviesCard/MoviesCard";

import './MoviesCardList.css';

function MoviesCardList({ movies, onSaveMovie, onRemoveMovie }) {

    console.log('CARD LIST')

    const location = useLocation();

    return (
        <ul className="movies-card-list">
            {movies.map((movie, index) => {
                return (
                    <MoviesCard
                        key={index + 1}
                        currentMovie={movie}
                        location={location.pathname}
                        onSaveMovie={onSaveMovie}
                        onRemoveMovie={onRemoveMovie}
                    />
                );
            })}
        </ul>
    );
}
export default MoviesCardList;
