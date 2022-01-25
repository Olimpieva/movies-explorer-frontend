import React from "react";
import { Link } from "react-router-dom";

import Auth from "../Auth/Auth";
import InputField from "../InputField/InputField";

import './Register.css';

function Register() {
    console.log('REGISTER')

    return (
        <main className="register">
            <Auth name="register" title="Добро пожаловать!" buttonText="Зарегистрироваться">
                <InputField formName="register" name="name" title="Имя" type="text" />
                <InputField formName="register" name="e-mail" title="E-mail" type="email" />
                <InputField formName="register" name="password" title="Пароль" type="password" />
            </Auth>
            <span className="register__link-caption">Уже зарегистрированы?
                <Link className="register__link" to="/signin"> Войти</Link>
            </span>
        </main>
    );
};

export default Register;