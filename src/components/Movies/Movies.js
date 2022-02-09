import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

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
    isFormValid,
    isMovieLiked,
    isDataLoading,
    isNoData
}) {

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
                <MoviesCardList
                    movies={movies}
                    isMovieLiked={isMovieLiked}
                    onSaveMovie={onSaveMovie}
                    onRemoveMovie={onRemoveMovie}
                    isDataLoading={isDataLoading}
                    isNoData={isNoData}
                />
            </main>
            <Footer />
        </div>
    );
};

export default Movies;