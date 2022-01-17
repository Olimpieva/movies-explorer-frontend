import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
            <NavLink to="/profile" className="navigation__profile-link">
                Аккаунт
                <span className="navigation__profile-icon"></span>
            </NavLink>
        </div>
    );
};

export default Navigation;