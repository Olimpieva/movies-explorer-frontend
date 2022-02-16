import React from "react";

import FormError from "../FormError/FormError";
import Logo from "../Logo/Logo";
import SubmitButton from "../SubmitButton/SubmitButton";

import './Auth.css';

function Auth(props) {
    const { name, title, buttonText, onSubmit, isValid, error } = props;

    return (
        <div className="auth">
            <Logo />
            <h1 className="auth__title">{title}</h1>
            <form className={`auth__form auth__form-${name}`} name={`auth-${name}`} onSubmit={onSubmit}>
                {props.children}
                <FormError
                    type="button"
                    name={`submit-${name}`}
                    isHidden={error.length === 0}
                    message={error}
                />
                <SubmitButton text={buttonText} disabled={!isValid || error} />
            </form>
        </div>
    )
}

export default Auth;