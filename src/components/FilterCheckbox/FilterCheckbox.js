import React from "react";

import './FilterCheckbox.css'

function FilterCheckbox({ name, checkboxText, value, onChange }) {

    return (
        <div className="filter search__filter">
            <input className="filter__checkbox" id={`${name}-checkbox`}
                type="checkbox"
                checked={value}
                onChange={(event) => { onChange(!value, event.target.id) }}
                value={value}
            />
            <label className="filter__label" htmlFor={`${name}-checkbox`} ></label>
            <p className="filter__text">{checkboxText}</p>
        </div>
    );
};

export default FilterCheckbox;