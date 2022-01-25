import React from "react";

import FormError from "../FormError/FormError";

import './InputField.css';

function InputField(props) {
    const { formName, name, title, type } = props;

    return (
        <fieldset className={`input-field ${formName}__input-field`}>
            <label htmlFor={`${formName}-${name}`} className="input-field__caption">{title}</label>
            <input className="input-field__input" id={`${formName}-${name}`} name={name} type={type} />
            <FormError isHidden={true} name={name} type="input" message="" />
        </fieldset>
    )
}

export default InputField;