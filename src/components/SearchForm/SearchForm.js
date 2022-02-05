import React, { useEffect, useState } from "react";

import FormError from "../FormError/FormError";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { defaultValidationErrorMessages } from "../../utils/constans";

import './SearchForm.css';
import { useValidation } from "../../utils/useValidation";

function SearchForm({ onSearchMovie }) {

    console.log('SEARCH FORM')
    const { values: { keyword }, validityState, isFormValid, handleChange, resetForm, setValues, setIsFormValid, setValidityState } = useValidation(true);
    const [isErrorsHidden, setIsErrorsHidden] = useState(true)
    // const [keyword, setKeyword] = useState('');
    const [isChecked, setIsChecked] = useState({
        "shortMovies-checkbox": false,
    });

    // useEffect(() => {
    //     setIsFormValid(true)
    // }, [])

    useEffect(() => {
        onSearchMovie(keyword, isChecked)

    }, [isChecked])

    const onSearchButtonClick = (event) => {
        event.preventDefault()
        setIsFormValid((keyword))

        if (!keyword) {
            return null
        }
        onSearchMovie(keyword, isChecked);
    }

    const onFilterCheckboxClick = (nextCheckboxValue, checkboxName) => {
        setIsChecked({ ...isChecked, [checkboxName]: nextCheckboxValue });
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
                    onChange={(event) => handleChange(event.target)}
                    required
                />
                <FormError isHidden={isFormValid} formName="search" name="movie" type="input" message={defaultValidationErrorMessages.valueMissing()} />
                <button className="search__button" onClick={onSearchButtonClick}></button>
            </form>
            <FilterCheckbox name="shortMovies" checkboxText="Короткометражки" value={isChecked["shortMovies-checkbox"]} onChange={onFilterCheckboxClick} />
        </section>
    );
};

export default SearchForm;