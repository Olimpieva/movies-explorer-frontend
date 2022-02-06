import React, { useEffect, useMemo, useState } from "react";

import FormError from "../FormError/FormError";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { defaultValidationErrorMessages } from "../../utils/constans";

import './SearchForm.css';

function SearchForm({
    onSearchMovie,
    keyword,
    onKeywordChange,
    checkboxes,
    onCheckboxChange,
    isFormValid }) {

    console.log('SEARCH FORM')


    const onSearchButtonClick = (event) => {
        event.preventDefault()
        onSearchMovie();
    }

    const onFilterCheckboxClick = (nextCheckboxValue, checkboxName) => {
        onCheckboxChange({ ...checkboxes, [checkboxName]: nextCheckboxValue });
    }

    return (
        <section className="search">
            <form className="search__form">
                <input className="search__input"
                    type="text"
                    id="search-movie"
                    name="keyword"
                    placeholder="Фильм"
                    minLength="1"
                    maxLength="100"
                    value={keyword || ''}
                    onChange={(event) => onKeywordChange(event.target)}
                    required
                />
                <FormError isHidden={isFormValid} formName="search" name="movie" type="input" message={defaultValidationErrorMessages.valueMissing()} />
                <button className="search__button" onClick={onSearchButtonClick}></button>
            </form>
            <FilterCheckbox name="shortMovies" checkboxText="Короткометражки" value={checkboxes["shortMovies-checkbox"]} onChange={onFilterCheckboxClick} />
        </section>
    );
};

export default SearchForm;