import React from "react";
import { NavLink } from "react-router-dom";

import './DropDownNavigation.css';

function DropDownNavigation({ isOpened, onClose }) {
    console.log(isOpened)
    return (
        <div className={`nav-wrapper ${isOpened && 'nav-wrapper_opened'}`}>
            <nav className={`drop-down-nav ${isOpened && 'drop-down-nav_opened'}`}>
                <ul className="drop-down-nav__list">
                    <li className="drop-down-nav__item">
                        <NavLink to="/" title="На главную" className={({ isActive }) => `drop-down-nav__link ${isActive && 'drop-down-nav__link_active'}`}>Главная</NavLink>
                    </li>
                    <li className="drop-down-nav__item">
                        <NavLink to="/movies" className={({ isActive }) => `drop-down-nav__link ${isActive && 'drop-down-nav__link_active'}`}>Фильмы</NavLink>
                    </li>
                    <li className="drop-down-nav__item">
                        <NavLink to="/saved-movies" className={({ isActive }) => `drop-down-nav__link ${isActive && 'drop-down-nav__link_active'}`}>Сохранённые фильмы</NavLink>
                    </li>
                    <li className="drop-down-nav__item drop-down-nav__item_profile">
                        <NavLink to="/profile" className={({ isActive }) => `nav__link nav__link_profile ${isActive && 'drop-down-nav__link_active'}`}>
                            Аккаунт
                            <span className="nav__profile-icon"></span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button className={`nav-close-button ${isOpened && 'nav-close-button_visible'}`} onClick={onClose}></button>
        </div>

    );
};

export default DropDownNavigation;