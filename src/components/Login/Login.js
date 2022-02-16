import React, { useState } from "react";
import { Link } from "react-router-dom";
import { emailValidationErrorMessages, passwordValidationErrorMessages } from "../../utils/constans";
import { useValidation } from "../../utils/useValidation";

import Auth from "../Auth/Auth";
import InputField from "../InputField/InputField";

import './Login.css';

function Login({ onLogin }) {
    const [resError, setResError] = useState('');

    const { values: { email, password }, errors, isFormValid, handleChange, resetForm } = useValidation(
        undefined,
        {
            email: emailValidationErrorMessages,
            password: passwordValidationErrorMessages
        }
    );

    const handleSubmit = async (event) => {
        event.preventDefault();

        resetForm({ email, password }, {}, false);

        const result = await onLogin({
            email,
            password
        });

        if (result.hasOwnProperty('error')) {
            setResError(result.error);
        }

    };

    return (
        <main className="login">
            <Auth
                name="login"
                title="Рады видеть!"
                buttonText="Войти"
                onSubmit={handleSubmit}
                isValid={isFormValid}
                error={resError}
            >
                <InputField
                    type="email"
                    formName="login"
                    name="email"
                    title="E-mail"
                    pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                    required
                    value={email || ''}
                    onChange={handleChange}
                    error={errors.email}
                    setResError={setResError}
                />
                <InputField
                    type="password"
                    formName="login"
                    name="password"
                    title="Пароль"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}"
                    required
                    value={password || ''}
                    onChange={handleChange}
                    error={errors.password}
                    setResError={setResError}
                />
            </Auth>
            <span className="login__link-caption">Ещё не зарегистрированы?
                <Link className="login__link" to="/signup"> Регистрация</Link>
            </span>
        </main>
    );
};

export default Login;