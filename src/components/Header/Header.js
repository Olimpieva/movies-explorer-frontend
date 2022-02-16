import React, { useState } from "react";
import DropDownNavigation from "../DropDownNavigation/DropDownNavigation";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import './Header.css';

function Header() {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function closeNavigationMenu() {
        setIsMenuOpened(false);
    }

    return (
        <header className="header">
            <Logo />
            <Navigation />
            <DropDownNavigation isOpened={isMenuOpened} onClose={closeNavigationMenu} />
            <button className="header__menu-button" onClick={() => setIsMenuOpened(true)}>&#9776;</button>
        </header>
    );
};

export default Header;