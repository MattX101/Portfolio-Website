import React from 'react';
import BtnTextLink from '../BtnTextLink.tsx';

const BtnPageLink = ({ text, onClick }) => {
    return (
        <BtnTextLink
            className='hover:text-primary-darkHighlight-s1l6 block my-4 p-2 text-4xl text-center'
            text={text}
            onClick={onClick} />
    );
};

export default BtnPageLink