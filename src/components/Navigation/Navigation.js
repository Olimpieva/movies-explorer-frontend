import React from "react";
import { NavLink } from "react-router-dom";

import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
                </li>
                <li className="navigation__item navigation__item_profile">
                    <NavLink to="/profile" className="navigation__link navigation__link_profile">
                        Аккаунт
                        <span className="navigation__profile-icon"></span>
                    </NavLink>
                </li>
            </ul>

        </nav>
    );
};

export default Navigation;