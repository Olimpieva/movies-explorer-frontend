import React from "react";
import { Route, Routes } from 'react-router-dom';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import { CurrentSavedCardsContext } from '../../context/CurrentSavedCardsContext';
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

import './App.css';

import { movies, savedMovies, user } from '../../fixtures';

function App() {

  return (
    <CurrentUserContext.Provider value={user || {}}>
      <CurrentSavedCardsContext.Provider value={savedMovies || []}>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/movies" element={<Movies movies={movies} />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div >
      </CurrentSavedCardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
