import React from "react";

function InputError(props) {
    const { isHidden, name, message } = props;

    return (
        <span
            className={`input-error ${!isHidden && 'input-error_active'}`}
            id={`${name}-error`}
        >
            {message}
        </span>
    )

}

export default InputError;