import React from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
    console.log('HEADER')

    return (
        <header className="header">
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;