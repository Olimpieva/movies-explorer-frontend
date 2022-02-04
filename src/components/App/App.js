import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import { CurrentSavedMoviesContext } from '../../context/CurrentSavedMoviesContext';
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

import './App.css';

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

// import { movies, savedMovies } from '../../fixtures';

function App() {

  console.log('APP');

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  async function getAllMovies() {
    try {
      const movies = await moviesApi.getMovies();
      setAllMovies(movies);
    } catch (error) {
      console.log(error);
    }
  }

  async function getSavedMovies() {
    let movies;

    try {
      movies = await mainApi.getSavedMovies();
      console.log({ 'SavedMovies': movies });
    } catch (error) {
      return console.log(error);
    }

    setSavedMovies(movies);
  }

  async function checkUserValidity() {
    let user;

    try {
      user = await mainApi.checkToken();
      if (!user) {
        throw new Error(`Произошла ошибка авторизации`)
      }
    } catch (error) {
      return console.log(error);
    }

    setLoggedIn(true);
    setCurrentUser(user);
    getSavedMovies();
    getAllMovies();
    navigate('/movies');
  }

  useEffect(() => {
    console.log('Ya tut')
    checkUserValidity();
  }, [])

  async function handleRegister(userData) {
    try {
      await mainApi.register(userData)
    } catch (error) {
      console.log(error);
    }

    handleLogin(userData);
  }

  async function handleLogin(userData) {
    try {
      await mainApi.login(userData);
    } catch (error) {
      console.log(error)
    }

    checkUserValidity();
  }

  async function handleLogout() {
    try {
      await mainApi.logout();
    } catch (error) {
      return console.log(error);
    }

    setLoggedIn(false);
    setCurrentUser(null);
    navigate('/');
  }

  async function handleEditProfile(userInfo) {
    let updatedUser;

    try {
      updatedUser = await mainApi.updateUserInfo(userInfo);
    } catch (error) {
      return console.log(error);
    }

    setCurrentUser(updatedUser);
  }
  async function handleSearchMovies(keyword, checkboxes) {

    if (!keyword) {

    }

    let movies = (location === '/movies' ? allMovies : savedMovies)
      .filter(movie => movie.nameRU.toLowerCase().includes(keyword))

    if (checkboxes["shortMovies-checkbox"]) {
      movies = movies.filter((movie) => movie.duration <= 30)
    }

    setSelectedMovies(movies)
  }

  async function handleSaveMovie(movie) {
    console.log({ movie })
    let savedMovie;

    try {
      savedMovie = await mainApi.createSavedMovie(movie);
      console.log({ savedMovie })
    } catch (error) {
      return console.log(error);
    }

    getSavedMovies()
  }

  async function handleRemoveMovie(movie) {
    let removedMovie;
    console.log({ movie })

    try {
      removedMovie = await mainApi.removeSavedMovie(movie._id)
      console.log({ removedMovie })
    } catch (error) {
      console.log(error)
    }
  }
  //{"_id":"61fa70c16f6317fb4922c525","name":"Test User","email":"testuser@mail.ru"}
  //{_id: '61fbc9b55bee06144ba1679d', name: 'Test user 2', email: 'testemail@yandex.ru', __v: 0}

  return (
    <CurrentUserContext.Provider value={currentUser || {}}>
      <CurrentSavedMoviesContext.Provider value={savedMovies || []}>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
            <Route path="/signup" element={<Register onRegister={handleRegister} />} />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route path="/movies" element={<Movies onSaveMovie={handleSaveMovie} onRemoveMovie={handleRemoveMovie} />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile onLogout={handleLogout} onEditProfile={handleEditProfile} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div >
      </CurrentSavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
