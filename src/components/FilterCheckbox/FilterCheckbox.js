import React from "react";

function FilterCheckbox({ name, checkboxText }) {
    return (
        <div className="filter">
            <input
                type="checkbox"
                id={`${name}-checkbox`}
                className="filter__checkbox"
            />
            <label htmlFor={`${name}-checkbox`} className="filter__label"></label>
            <p className="filter__text">{checkboxText}</p>
        </div>
    );
};

export default FilterCheckbox;