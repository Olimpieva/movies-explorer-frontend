import React, { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../Auth/Auth";
import InputField from "../InputField/InputField";
import { useValidation } from "../../utils/useValidation";
import { emailValidationErrorMessages, passwordValidationErrorMessages } from "../../utils/constans";

import './Register.css';

function Register({ onRegister }) {

    const { values, validityState, isFormValid, handleChange, resetForm, setValues, setIsFormValid, setValidityState } = useValidation();

    console.log({ validityState })
    console.log({ values })
    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister(values);
        console.log('da')
    }

    return (
        <main className="register">
            <Auth name="register" title="Добро пожаловать!" buttonText="Зарегистрироваться" onSubmit={handleSubmit} isValid={isFormValid}>
                <InputField
                    formName="register"
                    name="name" title="Имя"
                    type="text"
                    value={values.name || ''}
                    onChange={handleChange}
                    error={validityState.name}
                />
                <InputField
                    formName="register"
                    name="email"
                    title="E-mail"
                    type="email"
                    value={values.email || ''}
                    onChange={handleChange}
                    overrideErrorMessages={emailValidationErrorMessages}
                    pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                    required
                    error={validityState.email}
                />
                <InputField
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}"
                    formName="register"
                    name="password"
                    title="Пароль"
                    type="password"
                    value={values.password || ''}
                    onChange={handleChange}
                    minLength="8"
                    overrideErrorMessages={passwordValidationErrorMessages}
                    error={validityState.password}
                    required
                />
            </Auth>
            <span className="register__link-caption">Уже зарегистрированы?
                <Link className="register__link" to="/signin"> Войти</Link>
            </span>
        </main>
    );
};

export default Register;