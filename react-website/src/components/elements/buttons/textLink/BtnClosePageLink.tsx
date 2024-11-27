import React from 'react';
import BtnTextLink from '../BtnTextLink.tsx';

const BtnClosePageLink = ({ text, onClick }) => {
    return (
        <BtnTextLink
            className='block p-2 text-4xl text-center hover:text-red-600'
            text={text}
            onClick={onClick} />
    );
};

export default BtnClosePageLink