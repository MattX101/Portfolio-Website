import React from 'react';
import BtnTextLink from '../BtnTextLink.tsx';

const BtnPageLink = ({ text, onClick }) => {
    return (
        <BtnTextLink
            className='block my-4 p-2 text-4xl text-center hover:text-primary-darkHighlight-s1l6 dark:hover:text-primary-lightHighlight-s1l6'
            text={text}
            onClick={onClick} />
    );
};

export default BtnPageLink