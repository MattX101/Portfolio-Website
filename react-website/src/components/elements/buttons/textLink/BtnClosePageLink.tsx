import React from 'react';
import BtnTextLink from '../BtnTextLink.tsx';

const BtnClosePageLink = ({ text, onClick }) => {
    return (
        <BtnTextLink
            className='hover:text-red-600 block p-2 text-4xl text-center'
            text={text}
            onClick={onClick} />
    );
};

export default BtnClosePageLink