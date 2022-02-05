import React, { useContext, useState } from "react";

import { CurrentSavedMoviesContext } from '../../context/CurrentSavedMoviesContext';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect } from "react/cjs/react.development";

function SavedMovies({ onSaveMovie, onSearchMovie, onRemoveMovie }) {
    const [foundMovies, setFoundMovies] = useState([]);

    const savedMovies = useContext(CurrentSavedMoviesContext);

    useEffect(() => {
        console.log('YA TUT')
        setFoundMovies(savedMovies);
    }, [])

    const onSearch = (keyword, checkboxes) => {

        let movies = savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(keyword))

        if (checkboxes["shortMovies-checkbox"]) {
            movies = movies.filter((movie) => movie.duration <= 30)
        }

        setFoundMovies(movies)
    }

    return (
        <div className="saved-movies-page">
            <Header />
            <main className="saved-movies saved-movies-page__movies">
                <SearchForm onSearchMovie={onSearch} />
                <MoviesCardList movies={foundMovies} onSaveMovie={onSaveMovie} onRemoveMovie={onRemoveMovie} />
            </main>
            <Footer />
        </div>
    );
};

export default SavedMovies;