import React, { useContext, useState } from "react";

import { CurrentUserContext } from '../../context/CurrentUserContext';

import Header from "../Header/Header";
import FormError from "../FormError/FormError";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useValidation } from "../../utils/useValidation";
import { emailValidationErrorMessages, noticeMessages } from "../../utils/constans";

import './Profile.css';

function Profile({ onLogout, onEditProfile }) {

    const user = useContext(CurrentUserContext);
    const [isEdit, setIsEdit] = useState(false);
    const [resConfirmation, setResConfirmation] = useState('');
    const { values: { name, email }, handleChange, errors, isFormValid, resetForm } = useValidation({
        values: {
            name: user.name,
            email: user.email
        }
    },
        { email: emailValidationErrorMessages, }
    );

    async function onSubmit(event) {
        event.preventDefault();

        resetForm({ name, email }, {}, false);

        const result = await onEditProfile({
            name,
            email,
        });

        if (result.hasOwnProperty('error')) {
            setResConfirmation(result.error);
        } else {
            setResConfirmation(noticeMessages.successEditProfile);
        }

        setIsEdit(result.hasOwnProperty('error'))

    };

    return (
        <div className="profile-page">
            <Header />
            <main>
                <section className="profile">
                    <h1 className="profile__greetings">Привет, {user.name}!</h1>

                    <form className="profile__form" onSubmit={onSubmit}>
                        <fieldset className="profile__fieldset">
                            <label className="profile__label" htmlFor="profile-name">Имя</label>
                            <input className="profile__input" id="profile-name"
                                type="text"
                                name="name"
                                minLength="2"
                                maxLength="30"
                                required
                                disabled={!isEdit}
                                value={name || ''}
                                onChange={(event) => {
                                    setResConfirmation('');
                                    handleChange(event.target);
                                }}
                            />
                            <FormError
                                type="input"
                                name="email"
                                isHidden={!errors.name}
                                message={errors.name}
                            />
                        </fieldset>

                        <hr className="profile__line"></hr>

                        <fieldset className="profile__fieldset">
                            <label className="profile__label" htmlFor="profile-email" >E-mail</label>
                            <input className="profile__input" id="profile-email"
                                type="email"
                                name="email"
                                minLength="2"
                                maxLength="30"
                                pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                                required
                                disabled={!isEdit}
                                value={email || ''}
                                onChange={(event) => {
                                    setResConfirmation('');
                                    handleChange(event.target);
                                }
                                }
                            />
                            <FormError
                                type="input"
                                name="email"
                                isHidden={!errors.email}
                                message={errors.email}
                            />
                        </fieldset>

                        <div className="profile__buttons-container">
                            {isEdit ?
                                <>
                                    <FormError
                                        type="button"
                                        name="submit-profile"
                                        isHidden={!resConfirmation}
                                        message={resConfirmation}
                                    />
                                    <SubmitButton text="Сохранить" disabled={!isFormValid || (name === user.name && email === user.email)} />
                                </>
                                :
                                <>
                                    <FormError
                                        type="button"
                                        name="submit-profile"
                                        isHidden={!resConfirmation}
                                        message={resConfirmation}
                                    />
                                    <button className="profile__button profile__button_type_submit"
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setResConfirmation('');
                                            setIsEdit(true)
                                        }}
                                    >
                                        Редактировать
                                    </button>
                                </>}
                            <button className="profile__button profile__button_type_logout" type="reset" onClick={onLogout}>Выйти из аккаунта</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Profile;