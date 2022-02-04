import React, { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../Auth/Auth";
import InputField from "../InputField/InputField";

import './Login.css';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin({
            email,
            password
        });
    }

    return (
        <main className="login">
            <Auth name="login" title="Рады видеть!" buttonText="Войти" onSubmit={handleSubmit}>
                <InputField formName="login" name="email" title="E-mail" type="email" value={email} onChange={setEmail} />
                <InputField formName="login" name="password" title="Пароль" type="password" value={password} onChange={setPassword} />
            </Auth>
            <span className="login__link-caption">Ещё не зарегистрированы?
                <Link className="login__link" to="/signup"> Регистрация</Link>
            </span>
        </main>
    );
};

export default Login;