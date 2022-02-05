import React from "react";

import FormError from "../FormError/FormError";
import Logo from "../Logo/Logo";
import SubmitButton from "../SubmitButton/SubmitButton";

import './Auth.css';

function Auth(props) {
    const { name, title, buttonText, onSubmit, isValid } = props;

    return (
        <div className="auth">
            <Logo />
            <h1 className="auth__title">{title}</h1>
            <form className={`auth__form auth__form-${name}`} name={`auth-${name}`} onSubmit={onSubmit}>
                {props.children}
                <FormError isHidden={true} name={`submit-${name}`} type="button" message="" />
                <SubmitButton text={buttonText} disabled={!isValid} />
            </form>
        </div>
    )
}

export default Auth;