import React from "react";

import './FilterCheckbox.css'

function FilterCheckbox({ name, checkboxText, value, onChange }) {

    return (
        <div className="filter search__filter">
            <input
                type="checkbox"
                id={`${name}-checkbox`}
                className="filter__checkbox"
                onChange={() => {
                    onChange(!value)
                }}
                value={value}
            />
            <label htmlFor={`${name}-checkbox`} className="filter__label"></label>
            <p className="filter__text">{checkboxText}</p>
        </div>
    );
};

export default FilterCheckbox;