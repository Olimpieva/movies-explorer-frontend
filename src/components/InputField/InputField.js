import React from "react";

import FormError from "../FormError/FormError";
import Register from "../Register/Register";

import './InputField.css';

function InputField(props) {
    const { formName, name, title, type, value, onChange, minLength, pattern, required, error } = props;

    return (
        <fieldset className={`input-field ${formName}__input-field`}>
            <label htmlFor={`${formName}-${name}`} className="input-field__caption">{title}</label>
            <input className="input-field__input"
                id={`${formName}-${name}`}
                name={name}
                type={type}
                value={value}
                onChange={(event) => onChange(event.target)}
                minLength={minLength || "2"}
                maxLength="30"
                pattern={pattern || undefined}
                required={required || false}

            />
            <FormError isHidden={false} name={name} type="input" message={error} />
        </fieldset>
    )
}

export default InputField;