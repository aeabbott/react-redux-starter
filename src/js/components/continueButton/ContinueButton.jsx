import React from 'react';

const ContinueButton = props => (
    <button
        id="continueButton" type="button" onClick={props.validateAndContinue}
    >
        Continue
    </button>
);


export default ContinueButton;
