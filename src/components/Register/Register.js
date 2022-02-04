import React, { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../Auth/Auth";
import InputField from "../InputField/InputField";

import './Register.css';

function Register({ onRegister }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister({
            name,
            email,
            password
        });
    }

    return (
        <main className="register">
            <Auth name="register" title="Добро пожаловать!" buttonText="Зарегистрироваться" onSubmit={handleSubmit}>
                <InputField formName="register" name="name" title="Имя" type="text" value={name} onChange={setName} />
                <InputField formName="register" name="e-mail" title="E-mail" type="email" value={email} onChange={setEmail} />
                <InputField formName="register" name="password" title="Пароль" type="password" value={password} onChange={setPassword} />
            </Auth>
            <span className="register__link-caption">Уже зарегистрированы?
                <Link className="register__link" to="/signin"> Войти</Link>
            </span>
        </main>
    );
};

export default Register;