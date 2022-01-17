import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return (
        <div className="saved-movies-page">
            <Header />
            <main className="saved-movies saved-movies-page__movies">
                <SearchForm />
                <MoviesCardList movies={[1, 2, 3]} />
            </main>
            <Footer />
        </div>
    );
};

export default SavedMovies;