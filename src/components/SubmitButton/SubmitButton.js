
import React from "react";

import './SubmitButton.css';

function SubmitButton({ text, disabled }) {
    return (
        <button className="button-submit" type="submit" disabled={disabled}>{text}</button>
    )
}

export default SubmitButton;