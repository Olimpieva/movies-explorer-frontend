import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';

import { CurrentUserContext } from '../../context/CurrentUserContext';

import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import MoviesPages from "../MoviesPages/MoviesPages";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import mainApi from "../../utils/MainApi";
import { responseErrorMessages } from "../../utils/constans";

import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  async function checkUserValidity() {
    let user;

    try {
      user = await mainApi.checkToken();

      if (!user) {
        throw new Error(responseErrorMessages.invalidTokenData)
      }

    } catch (error) {
      setLoggedIn(false);
      return console.log(responseErrorMessages.loginUserError);
    }

    setCurrentUser(user);
    setLoggedIn(true);

    if (pathname === ("/signin" || "/signup")) {
      navigate('/movies')
    }

  }

  useEffect(() => {
    checkUserValidity();
  }, [])

  async function handleRegister(userData) {
    let user;

    try {
      user = await mainApi.register(userData)
    } catch (error) {
      let message;

      if (error.status === 409) {
        message = responseErrorMessages.userAlreadyExist;
      } else if (error.status === 500) {
        message = responseErrorMessages.serverError;
      } else {
        message = responseErrorMessages.registerUserError;
      }

      return { error: message };
    }

    handleLogin(userData);
    return user;
  }

  async function handleLogin(userData) {
    let isLoggedIn;

    try {
      isLoggedIn = await mainApi.login(userData);
      checkUserValidity()
    } catch (error) {
      let message;

      if (error.status === 500) {
        message = responseErrorMessages.serverError;
      } else {
        message = responseErrorMessages.invalidUserData;
      }

      return { error: message };
    }

    return { message: isLoggedIn.message }
  }

  async function handleLogout() {
    try {
      await mainApi.logout();
    } catch (error) {
      return console.log(responseErrorMessages.serverError);
    }

    setLoggedIn(false);
    setCurrentUser(null);
    navigate('/');
    localStorage.clear();
  }

  async function handleEditProfile(userInfo) {
    let updatedUser;

    try {
      updatedUser = await mainApi.updateUserInfo(userInfo);
    } catch (error) {
      let message;

      if (error.status === 409) {
        message = responseErrorMessages.userAlreadyExist;
      } else if (error.status === 500) {
        message = responseErrorMessages.serverError;
      } else {
        message = responseErrorMessages.updateUserError;
      }

      return { error: message };
    }

    setCurrentUser(updatedUser);
    return updatedUser;
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>

      <div className="app">
        {loggedIn === undefined ?
          <div className="app__preloader">
            <Preloader />
          </div>
          :
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route path="/signup" element={loggedIn ?
              <Navigate replace to="/movies" />
              :
              <Register onRegister={handleRegister} />}
            />
            <Route path="/signin" element={loggedIn ?
              <Navigate replace to="/movies" />
              :
              <Login onLogin={handleLogin} />} />
            <Route element={<ProtectedRoute loggedIn={loggedIn} />} >
              <Route path="/movies" element={<MoviesPages />} />
              <Route path="/saved-movies" element={<MoviesPages />} />
              <Route path="/profile" element={<Profile onLogout={handleLogout} onEditProfile={handleEditProfile} />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        }

      </div >

    </CurrentUserContext.Provider >
  );
}

export default App;
