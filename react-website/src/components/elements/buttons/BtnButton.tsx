import React from 'react';
import TxtBase from '../text/TxtBase.tsx';

const BtnButton = ({ text, id, className, onAction }) => {
    return (
        <button id={id} className={className} onClick={onAction}>
            <TxtBase>
                {text}
            </TxtBase>
        </button>
    );
};

export default BtnButton;