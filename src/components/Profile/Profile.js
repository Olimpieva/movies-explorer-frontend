import React, { useContext, useEffect, useState } from "react";

import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from "../Header/Header";
import FormError from "../FormError/FormError";

import './Profile.css';
import SubmitButton from "../SubmitButton/SubmitButton";

function Profile({ onLogout, onEditProfile }) {
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const user = useContext(CurrentUserContext);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user]);

    function onSubmit(event) {
        event.preventDefault();
        onEditProfile({
            name,
            email,
        })
        setIsEdit(false);
    }



    return (
        <div className="profile-page">
            <Header />
            <main>
                <section className="profile">
                    <h1 className="profile__greetings">Привет, {user.name}!</h1>

                    <form className="profile__form" onSubmit={onSubmit}>
                        <fieldset className="profile__fieldset">
                            <label htmlFor="profile-name" className="profile__label">Имя</label>
                            <input type="text" id="profile-name" name="profile-name" className="profile__input" disabled={!isEdit} value={name || ''} onChange={(event) => {
                                setName(event.target.value);
                            }} />
                            <FormError isHidden={true} name="email" type="input" message="" />
                        </fieldset>

                        <hr className="profile__line"></hr>

                        <fieldset className="profile__fieldset">
                            <label htmlFor="profile-email" className="profile__label">E-mail</label>
                            <input type="email" id="profile-email" name="profile-email" className="profile__input" disabled={!isEdit} value={email || ''} onChange={(event) => {
                                setEmail(event.target.value)
                            }} />
                            <FormError isHidden={true} name="email" type="input" message="" />
                        </fieldset>

                        <div className="profile__buttons-container">
                            {isEdit ?
                                <>
                                    <FormError isHidden={true} name="submit-profile" type="button" message="" />
                                    <SubmitButton text="Сохранить" />
                                </>
                                :
                                <>
                                    <button type="button" className="profile__button profile__button_type_submit" onClick={(e) => {
                                        e.preventDefault();
                                        setIsEdit(true)
                                    }}>Редактировать</button>
                                    <button type="reset" className="profile__button profile__button_type_logout" onClick={onLogout}>Выйти из аккаунта</button>
                                </>}
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Profile;