import React from "react";

import './FormError.css'

function FormError(props) {
    const { isHidden, name, type, message } = props;

    return (
        <span
            className={`form-error form-error_type_${type} ${!isHidden && 'form-error_active'}`}
            id={`${name}-error`}
        >
            {message}
        </span>
    )

}

export default FormError;