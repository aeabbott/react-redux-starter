import React from 'react';

const ContinueButton = props => (
    <button
        id="continueButton" type="button" onClick={props.navigateForward}
    >
        Continue
    </button>
);


export default ContinueButton;
