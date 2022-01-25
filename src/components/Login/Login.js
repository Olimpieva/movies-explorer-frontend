import React from "react";
import { Link } from "react-router-dom";

import Auth from "../Auth/Auth";
import InputField from "../InputField/InputField";

import './Login.css';

function Login() {
    console.log('LOGIN')

    return (
        <main className="login">
            <Auth name="login" title="Рады видеть!" buttonText="Войти">
                <InputField formName="login" name="email" title="E-mail" type="email" />
                <InputField formName="login" name="password" title="Пароль" type="password" />
            </Auth>
            <span className="login__link-caption">Ещё не зарегистрированы?
                <Link className="login__link" to="/signup"> Регистрация</Link>
            </span>
        </main>
    );
};

export default Login;