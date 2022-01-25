import React from "react";
import FormError from "../FormError/FormError";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <fieldset>
                    <input className="search__input" id="search-movie" name="movie-title"></input>
                    <FormError formName="search" name="movie" type="input" message="" />
                </fieldset>
                <button className="search__button"></button>
            </form>
            <FilterCheckbox name="short" checkboxText="Короткометражки" />
        </section>
    );
};

export default SearchForm;