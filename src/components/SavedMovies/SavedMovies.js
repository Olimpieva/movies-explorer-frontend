import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({
    movies,
    onSaveMovie,
    onSearchMovie,
    onRemoveMovie,
    keyword,
    onKeywordChange,
    checkboxes,
    onCheckboxChange,
    isFormValid,
    isNoData
}) {

    return (
        <div className="saved-movies-page">
            <Header />
            <main className="saved-movies saved-movies-page__movies">
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
                    onSaveMovie={onSaveMovie}
                    onRemoveMovie={onRemoveMovie}
                    isNoData={isNoData}
                />
            </main>
            <Footer />
        </div>
    );
};

export default SavedMovies;