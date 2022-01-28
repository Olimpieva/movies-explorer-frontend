import React from "react";
import { NavLink } from "react-router-dom";

import './Navigation.css';

function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/movies" className={({ isActive }) => `nav__link ${isActive && 'nav__link_active'}`} >Фильмы</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/saved-movies" className={({ isActive }) => `nav__link ${isActive && 'nav__link_active'}`} >Сохранённые фильмы</NavLink>
                </li>
                <li className="nav__item nav__item_profile">
                    <NavLink to="/profile" className={({ isActive }) => `nav__link nav__link_profile ${isActive && 'nav__link_active'}`}>
                        Аккаунт
                        <span className="nav__profile-icon"></span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;