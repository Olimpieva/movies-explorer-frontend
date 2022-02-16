import React from "react";
import { Link } from "react-router-dom";

import './Logo.css';

function Logo() {
    return (
        <Link to="/" title="На главную" className="logo" />
    );
};

export default Logo;