import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {

    return (
        <ul className="movies-card-list">
            {movies.map((item, index) => {
                return (
                    <MoviesCard
                        key={index}
                        isSavedMovies={true}
                        isLiked={true}
                    />
                );
            })}
        </ul>
    );
}
export default MoviesCardList;
