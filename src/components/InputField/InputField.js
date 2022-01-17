import React from "react";
import InputError from "../InputError/InputError";

function InputField(props) {
    const { formName, name, title, type } = props;

    return (
        <fieldset className="input-field__fieldset">
            <label htmlFor={`${formName}-${name}`} className="input-field__caption">{title}</label>
            <input className="input-field__input" id={`${formName}-${name}`} name={name} type={type} />
            <InputError isHidden={true} name={name} message="" />
        </fieldset>
    )
}

export default InputField;