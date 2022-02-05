import React, { useMemo } from "react";

import FormError from "../FormError/FormError";
import { defaultValidationErrorMessages } from "../../utils/constans";

import './InputField.css';

function InputField(props) {
    const { formName, name, title, type, value, onChange, minLength = 2, pattern, required, error = {}, overrideErrorMessages = {} } = props;

    console.log({ name, error })

    const updatedErrorMessages = useMemo(() => {
        return {
            ...defaultValidationErrorMessages,
            ...overrideErrorMessages
        }
    }, [overrideErrorMessages])


    const getValidationMessage = () => {
        if (error.valid || error.valid === undefined) {
            return undefined;
        };

        const [, getValidationMessage] = Object.entries(updatedErrorMessages).find(([errorKey]) => {
            const hasError = error[errorKey];
            if (hasError) {
                return true;
            }
            return false;
        });

        return getValidationMessage({ minLength });
    }

    const resultErrorMessage = getValidationMessage();

    console.log({ resultErrorMessage })

    return (
        <fieldset className={`input-field ${formName}__input-field`}>
            <label htmlFor={`${formName}-${name}`} className="input-field__caption">{title}</label>
            <input className="input-field__input"
                id={`${formName}-${name}`}
                name={name}
                type={type}
                value={value}
                onChange={(event) => onChange(event.target)}
                minLength={minLength}
                maxLength="30"
                pattern={pattern}
                required={required}

            />
            <FormError isHidden={false} name={name} type="input" message={resultErrorMessage} />
        </fieldset>
    )
}

export default InputField;