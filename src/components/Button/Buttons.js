import React from "react";

import { Button as BootstrapButton } from "react-bootstrap";

function Button({ variant, onClick, text }) {
    return (
        <>
            <BootstrapButton variant={variant} onClick={onClick}>
                {text}
            </BootstrapButton>
        </>
    );
}

export default Button;
