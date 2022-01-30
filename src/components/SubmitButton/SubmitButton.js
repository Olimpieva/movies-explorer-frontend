
import React from "react";

import './SubmitButton.css';

function SubmitButton({ text }) {
    return (
        <button className="button-submit" type="submit">{text}</button>
    )
}

export default SubmitButton;