import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import More from "../More/More";
import moviesApi from "../../utils/MoviesApi";

import './Movies.css';

function Movies({
    movies,
    onSearchMovie,
    onSaveMovie,
    onRemoveMovie,
    keyword,
    onKeywordChange,
    checkboxes,
    onCheckboxChange,
    isFormValid
}) {

    console.log('MOVIES')

    return (
        <div className="movies-page">
            <Header />
            <main className="movies movies-page__movies">
                <SearchForm
                    onSearchMovie={onSearchMovie}
                    keyword={keyword}
                    onKeywordChange={onKeywordChange}
                    checkboxes={checkboxes}
                    onCheckboxChange={onCheckboxChange}
                    isFormValid={isFormValid}
                />
                <MoviesCardList movies={movies} onSaveMovie={onSaveMovie} onRemoveMovie={onRemoveMovie} />
                <More isVisible={true} />
            </main>
            <Footer />
        </div>
    );
};

export default Movies;