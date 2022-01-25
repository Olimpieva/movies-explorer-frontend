import React from "react";
import Header from "../Header/Header";
import FormError from "../FormError/FormError";

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
                            <FormError isHidden={true} name="email" type="input" message="" />
                        </fieldset>

                        <hr className="profile__line" />

                        <fieldset className="profile__fieldset">
                            <label htmlFor="profile-email" className="profile__label">E-mail</label>
                            <input type="email" id="profile-email" name="profile-email" />
                            <FormError isHidden={true} name="email" type="input" message="" />
                        </fieldset>

                        <FormError isHidden={true} name="submit-profile" type="button" message="" />
                        <button type="submit" className="profile__button profile__button_type_submit">Редактировать</button>
                    </form>

                    <button type="reset" className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
                </section>
            </main>
        </div>
    );
};

export default Profile;