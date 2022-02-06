import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { useValidation } from '../../utils/useValidation';
import NotFound from "../NotFound/NotFound";
import { useMemo } from 'react/cjs/react.development';

import { CurrentSavedMoviesContext } from '../../context/CurrentSavedMoviesContext';

function MoviesPages() {
    console.log("MOVIES_PAGES")
    const [allMovies, setAllMovies] = useState(null);
    // const [savedMovies, setSavedMovies] = useState(null);
    const [selectedMovies, setSelectedMovies] = useState([]);
    const [checkboxes, setCheckboxes] = useState({
        "shortMovies-checkbox": false,
    });

    const { values: { keyword }, handleChange: onKeywordChange, isFormValid, setIsFormValid } = useValidation(true);

    const { pathname } = useLocation();

    const savedMovies = useContext(CurrentSavedMoviesContext)


    useEffect(() => {
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
        console.log(savedMovies)
        if (pathname !== '/saved-movies') {
            console.log('YA TUT WTO LI')
            return undefined;
        }
        console.log('YA TUT')
        setSelectedMovies(savedMovies)
    }, [pathname])

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

    return (
        <Routes>
            <Route path="/movies" element={
                <Movies
                    movies={foundMoviesByCheckbox || []}
                    onSearchMovie={handleSearchMovies}
                    onSaveMovie={handleSaveMovie}
                    onRemoveMovie={handleRemoveMovie}
                    keyword={keyword}
                    onKeywordChange={onKeywordChange}
                    checkboxes={checkboxes}
                    onCheckboxChange={setCheckboxes}
                    isFormValid={isFormValid}
                />}
            />
            <Route path="/saved-movies" element={
                <SavedMovies
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
                />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}

export default MoviesPages;

