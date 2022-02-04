import React, { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../Auth/Auth";
import InputField from "../InputField/InputField";
import { useValidation } from "../../utils/useValidation";

import './Register.css';

function Register({ onRegister }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { values, errors, isValid, handleChange, resetForm, setValues, setIsValid, setErrors } = useValidation();


    const handleSubmit = (event) => {
        // event.preventDefault();
        // onRegister({
        //     name,
        //     email,
        //     password
        // });
        console.log('da')
    }

    return (
        <main className="register">
            <Auth name="register" title="Добро пожаловать!" buttonText="Зарегистрироваться" onSubmit={handleSubmit}>
                <InputField
                    formName="register"
                    name="name" title="Имя"
                    type="text"
                    value={values.name || ''}
                    onChange={handleChange}
                    error={errors.name}
                />
                <InputField
                    formName="register"
                    name="email"
                    title="E-mail"
                    type="email"
                    value={values.email || ''}
                    onChange={handleChange}
                    pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                    required
                    error={errors.email}
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
                    error={errors.password}
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