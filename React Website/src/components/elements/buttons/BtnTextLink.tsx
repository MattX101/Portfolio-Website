import React from 'react';
import TxtBase from '../text/TxtBase.tsx';

const BtnTextLink = ({ className, text, onClick }) => {
    return (
        <TxtBase>
            <div className={className} onClick={onClick}>
                <b>{text}</b>
            </div>
        </TxtBase>
    );
};

export default BtnTextLink