import React, { useState } from "react";
import { Link } from "react-router-dom";
import { emailValidationErrorMessages, passwordValidationErrorMessages } from "../../utils/constans";
import { useValidation } from "../../utils/useValidation";

import Auth from "../Auth/Auth";
import InputField from "../InputField/InputField";

import './Login.css';

function Login({ onLogin }) {

    const { values: { email, password }, validityState, isFormValid, handleChange, resetForm, setValues, setIsValid, setErrors } = useValidation();

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin({
            email,
            password
        });
    }



    return (
        <main className="login">
            <Auth name="login" title="Рады видеть!" buttonText="Войти" onSubmit={handleSubmit} isValid={isFormValid}>
                <InputField
                    formName="login"
                    name="email"
                    title="E-mail"
                    type="email"
                    value={email || ''}
                    onChange={handleChange}
                    overrideErrorMessages={emailValidationErrorMessages}
                    pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                    required
                    error={validityState.email}
                />
                <InputField
                    formName="login"
                    name="password"
                    title="Пароль"
                    type="password"
                    value={password || ''}
                    onChange={handleChange}
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}"
                    overrideErrorMessages={passwordValidationErrorMessages}
                    error={validityState.password}
                    required
                />
            </Auth>
            <span className="login__link-caption">Ещё не зарегистрированы?
                <Link className="login__link" to="/signup"> Регистрация</Link>
            </span>
        </main>
    );
};

export default Login;