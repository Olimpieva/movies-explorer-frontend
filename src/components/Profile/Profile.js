import React, { useContext, useEffect, useState } from "react";

import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from "../Header/Header";
import FormError from "../FormError/FormError";

import './Profile.css';

function Profile() {
    const [isEditingEnabled, setIsEditingEnabled] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const user = useContext(CurrentUserContext);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user])

    // function onChange() {
    //     setIsEditingEnabled(true);
    // }


    return (
        <div className="profile-page">
            <Header />
            <main>
                <section className="profile">
                    <h1 className="profile__greetings">Привет, {user.name}!</h1>

                    <form className="profile__form" >
                        <fieldset className="profile__fieldset">
                            <label htmlFor="profile-name" className="profile__label">Имя</label>
                            <input type="text" id="profile-name" name="profile-name" className="profile__input" value={name || ''} readOnly={!isEditingEnabled} onChange={() => console.log('Da')} />
                            <FormError isHidden={true} name="email" type="input" message="" />
                        </fieldset>

                        <hr className="profile__line"></hr>

                        <fieldset className="profile__fieldset">
                            <label htmlFor="profile-email" className="profile__label">E-mail</label>
                            <input type="email" id="profile-email" name="profile-email" className="profile__input" value={email || ''} readOnly={!isEditingEnabled} onChange={() => console.log('Da')} />
                            <FormError isHidden={true} name="email" type="input" message="" />
                        </fieldset>

                        <FormError isHidden={true} name="submit-profile" type="button" message="" />
                        {isEditingEnabled ?
                            <button type="submit" className="profile__button profile__button_type_submit">Сохранить</button>
                            :
                            <button type="submit" className="profile__button profile__button_type_submit" onClick={() => console.log('da')}>Редактировать</button>
                        }

                    </form>

                    <button type="reset" className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
                </section>
            </main>
        </div>
    );
};

export default Profile;