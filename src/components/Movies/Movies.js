import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import More from "../More/More";
import moviesApi from "../../utils/MoviesApi";

import './Movies.css';

function Movies({ onSaveMovie, onRemoveMovie }) {

    console.log('MOVIES')

    const [allMovies, setAllMovies] = useState([]);
    const [foundMovies, setFoundMovies] = useState([]);

    async function getAllMovies() {
        try {
            const movies = await moviesApi.getMovies();
            setAllMovies(movies);
            console.log(movies)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllMovies();
    }, [])

    const onSearch = (keyword, onlyShortMovies) => {
        console.log(keyword, onlyShortMovies)

        let movies = allMovies.filter(movie => movie.nameRU.toLowerCase().includes(keyword));

        if (onlyShortMovies) {
            movies = movies.filter((movie) => movie.duration <= 30)
        }

        setFoundMovies(movies)
    }

    return (
        <div className="movies-page">
            <Header />
            <main className="movies movies-page__movies">
                <SearchForm onSearchMovie={onSearch} />
                <MoviesCardList movies={foundMovies || []} onSaveMovie={onSaveMovie} onRemoveMovie={onRemoveMovie} />
                <More isVisible={true} />
            </main>
            <Footer />
        </div>
    );
};

export default Movies;