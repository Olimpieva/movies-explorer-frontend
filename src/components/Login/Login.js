import React from "react";
import { Link } from "react-router-dom";

import InputField from "../InputField/InputField";
import Logo from "../Logo/Logo";

function Login() {
    console.log('LOGIN')

    return (
        <main className="login">
            <Logo />
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form">
                <InputField formName="login" name="email" title="E-mail" />
                <InputField formName="login" name="password" title="Пароль" />
                <button className="login__button login__button_action_save" type="submit">Войти</button>
            </form>
            <span className="login__link-caption">Ещё не зарегистрированы?
                <Link className="login__link" to="/signup"> Регистрация</Link>
            </span>
        </main>
    );
};

export default Login;