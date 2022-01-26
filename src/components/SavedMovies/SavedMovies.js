import React, { useContext } from "react";

import { CurrentSavedCardsContext } from '../../context/CurrentSavedCardsContext';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {

    const savedMovies = useContext(CurrentSavedCardsContext);

    return (
        <div className="saved-movies-page">
            <Header />
            <main className="saved-movies saved-movies-page__movies">
                <SearchForm />
                <MoviesCardList movies={savedMovies} />
            </main>
            <Footer />
        </div>
    );
};

export default SavedMovies;