import React from "react";
import { useLocation } from 'react-router-dom';

import MoviesCard from "../MoviesCard/MoviesCard";

import './MoviesCardList.css';

function MoviesCardList({ movies }) {

    const location = useLocation();

    return (
        <ul className="movies-card-list">
            {movies.map((movie, index) => {
                return (
                    <MoviesCard
                        key={index + 1}
                        movie={movie}
                        location={location.pathname}
                    />
                );
            })}
        </ul>
    );
}
export default MoviesCardList;
