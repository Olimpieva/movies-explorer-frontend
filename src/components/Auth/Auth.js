import React from "react";

import FormError from "../FormError/FormError";
import Logo from "../Logo/Logo";

import './Auth.css';

function Auth(props) {
    const { name, title, buttonText } = props;

    return (
        <div className="auth">
            <Logo />
            <h1 className="auth__title">{title}</h1>
            <form className={`auth__form auth__form-${name}`} name={`auth-${name}`}>
                {props.children}
                <FormError isHidden={true} name={`submit-${name}`} type="button" message="" />
                <button className="auth__button" type="submit">{buttonText}</button>
            </form>
        </div>
    )
}

export default Auth;