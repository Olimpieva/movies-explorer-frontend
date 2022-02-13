import React, { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../Auth/Auth";
import InputField from "../InputField/InputField";
import { useValidation } from "../../utils/useValidation";
import { emailValidationErrorMessages, passwordValidationErrorMessages } from "../../utils/constans";

import './Register.css';

function Register({ onRegister }) {

    const [resError, setResError] = useState('');

    const { values: { name, email, password }, errors, isFormValid, handleChange, resetForm } = useValidation(
        undefined,
        {
            email: emailValidationErrorMessages,
            password: passwordValidationErrorMessages,
        }
    );

    const handleSubmit = async (event) => {
        event.preventDefault();

        resetForm({ name, email, password }, {}, false);

        const result = await onRegister({
            name,
            email,
            password,
        });

        if (result.hasOwnProperty('error')) {
            setResError(result.error);
        } else {
            resetForm({}, {}, true)
        }

    };

    return (
        <main className="register">
            <Auth
                name="register"
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                onSubmit={handleSubmit}
                isValid={isFormValid}
                error={resError}
            >
                <InputField
                    type="text"
                    formName="register"
                    name="name"
                    title="Имя"
                    required
                    value={name || ''}
                    onChange={handleChange}
                    error={errors.name}
                    setResError={setResError}
                />
                <InputField
                    type="email"
                    formName="register"
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
                    formName="register"
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
            <span className="register__link-caption">Уже зарегистрированы?
                <Link className="register__link" to="/signin"> Войти</Link>
            </span>
        </main>
    );
};

export default Register;