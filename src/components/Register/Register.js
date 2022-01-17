import React from "react";
import { Link } from "react-router-dom";

import InputField from "../InputField/InputField";
import Logo from "../Logo/Logo";

function Register() {
    console.log('REGISTER')

    return (
        <main className="register">
            <Logo />
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form">
                <InputField formName="register" name="name" title="Имя" type="text" />
                <InputField formName="register" name="e-mail" title="E-mail" type="email" />
                <InputField formName="register" name="password" title="Пароль" type="password" />
                <button className="register__button register__button_action_save" type="submit">Зарегистрироваться</button>
            </form>
            <span className="register__link-caption">Уже зарегистрированы?
                <Link className="register__link" to="/signin"> Войти</Link>
            </span>
        </main>
    );
};

export default Register;