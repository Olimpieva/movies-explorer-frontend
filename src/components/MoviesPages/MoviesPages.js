import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { useValidation } from '../../utils/useValidation';
import { useMemo } from 'react/cjs/react.development';

function MoviesPages({ savedMovies, setSavedMovies }) {
    console.log("MOVIES_PAGES")
    const [allMovies, setAllMovies] = useState(null);
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [checkboxes, setCheckboxes] = useState({
        "shortMovies-checkbox": false,
    });

    const { values: { keyword }, handleChange: onKeywordChange, isFormValid, setIsFormValid } = useValidation(true);

    const { pathname } = useLocation();

    const alreadySetInitialValues = useRef(false);

    useEffect(() => {
        if (pathname !== '/saved-movies' || savedMovies === null || alreadySetInitialValues.current === true) {
            return undefined;
        }

        setSelectedMovies(savedMovies)
        alreadySetInitialValues.current = true;
    }, [pathname, savedMovies])

    async function getAllMovies() {
        try {
            const movies = await moviesApi.getMovies();
            setAllMovies(movies);
            return movies;
        } catch (error) {
            console.log(error);
        }
    }

    async function getSavedMovies() {
        let movies;

        try {
            movies = await mainApi.getSavedMovies();
            console.log({ 'SavedMoviesAPP': movies });
        } catch (error) {
            return console.log(error);
        }

        // setSavedMovies(movies);
    }

    async function handleSearchMovies() {

        if (!keyword) {
            return undefined;
        }

        let moviesToSearch;

        if (pathname === '/movies') {
            console.log('LOCATION MOVIES')
            if (!allMovies) {
                moviesToSearch = await getAllMovies()
            } else {
                moviesToSearch = allMovies;
            }
        } else {
            if (!savedMovies) {
                return undefined;
            }
            moviesToSearch = savedMovies;
        }

        const foundMovies = moviesToSearch.filter(movie => movie.nameRU.toLowerCase().includes(keyword.toLowerCase()));

        setSelectedMovies(foundMovies)
    }

    const foundMoviesByCheckbox = useMemo(() => {
        if (!checkboxes["shortMovies-checkbox"]) {
            return selectedMovies
        }
        return selectedMovies.filter((movie) => movie.duration <= 30);
    }, [selectedMovies, checkboxes])


    async function handleSaveMovie(movie) {
        let savedMovie;

        try {
            savedMovie = await mainApi.createSavedMovie(movie);
            console.log({ savedMovie })
        } catch (error) {
            return console.log(error);
        }

        getSavedMovies()
        return savedMovie;
    }

    async function handleRemoveMovie(movie) {
        try {
            await mainApi.removeSavedMovie(movie._id)
        } catch (error) {
            console.log(error)
        }

        getSavedMovies()
    }

    if (pathname === 'movies') {
        return <Movies
            movies={foundMoviesByCheckbox || []}
            onSearchMovie={handleSearchMovies}
            onSaveMovie={handleSaveMovie}
            onRemoveMovie={handleRemoveMovie}
            keyword={keyword}
            onKeywordChange={onKeywordChange}
            checkboxes={checkboxes}
            onCheckboxChange={setCheckboxes}
            isFormValid={isFormValid}
        />
    }

    return <SavedMovies
        initialMovies={savedMovies}
        movies={foundMoviesByCheckbox || []}
        setMovies={setSelectedMovies}
        onSearchMovie={handleSearchMovies}
        onRemoveMovie={handleRemoveMovie}
        keyword={keyword}
        onKeywordChange={onKeywordChange}
        checkboxes={checkboxes}
        onCheckboxChange={setCheckboxes}
        isFormValid={isFormValid}
    />
}

export default MoviesPages;

