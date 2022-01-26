import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import More from "../More/More";

import './Movies.css';

function Movies({ movies }) {
    console.log('MOVIES')

    return (
        <div className="movies-page">
            <Header />
            <main className="movies movies-page__movies">
                <SearchForm />
                <MoviesCardList movies={movies} />
                <More isVisible={true} />
            </main>
            <Footer />
        </div>
    );
};

export default Movies;