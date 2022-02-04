import React, { useEffect, useState } from "react";

import FormError from "../FormError/FormError";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import './SearchForm.css';

function SearchForm({ onSearchMovie }) {

    console.log('SEARCH FORM')

    const [keyword, setKeyword] = useState('');
    const [isChecked, setIsChecked] = useState({
        "shortMovies-checkbox": false,
    });

    useEffect(() => {
        onSearchMovie(keyword, isChecked)
    }, [isChecked])

    const onSearchButtonClick = (event) => {
        event.preventDefault()
        onSearchMovie(keyword, isChecked)
    }

    const onFilterCheckboxClick = (nextCheckboxValue, checkboxId) => {
        setIsChecked({ ...isChecked, [checkboxId]: nextCheckboxValue });
    }

    return (
        <section className="search">
            <form className="search__form">
                <input className="search__input"
                    id="search-movie"
                    name="movie-title"
                    placeholder="Фильм"
                    value={keyword}
                    onChange={(event) => {
                        setKeyword(event.target.value)
                    }}
                    required
                />
                <FormError formName="search" name="movie" type="input" message="" />
                <button className="search__button" onClick={onSearchButtonClick}></button>
            </form>
            <FilterCheckbox name="shortMovies" checkboxText="Короткометражки" value={isChecked["shortMovies-checkbox"]} onChange={onFilterCheckboxClick} />
        </section>
    );
};

export default SearchForm;