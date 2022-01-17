import React from "react";
import Header from "../Header/Header";
import InputError from "../InputError/InputError";

function Profile() {
    return (
        <div className="profile-page">
            <Header />
            <main>
                <section className="profile">
                    <h1 className="profile__greetings">Привет!</h1>

                    <form className="profile__form" >
                        <fieldset className="profile__fieldset">
                            <label htmlFor="profile-name" className="profile__label">Имя</label>
                            <input type="text" id="profile-name" name="profile-name" />
                            <InputError isHidden={true} name="email" message="" />
                        </fieldset>

                        <hr className="profile__line" />

                        <fieldset className="profile__fieldset">
                            <label htmlFor="profile-email" className="profile__label">E-mail</label>
                            <input type="email" id="profile-email" name="profile-email" />
                            <InputError isHidden={true} name="email" message="" />
                        </fieldset>

                        <button type="submit" className="profile__button profile__button_type_submit">Редактировать</button>
                    </form>

                    <button type="reset" className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
                </section>
            </main>
        </div>
    );
};

export default Profile;