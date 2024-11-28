import React from 'react';
import BtnTextLink from '../BtnTextLink.tsx';

const BtnSlidingToggle = ({ text, onClick }) => {
    return (
        <BtnTextLink
            className='bg-primary-dark-s1l1 hover:bg-primary-darkHighlight-s1l6 dark:hover:bg-primary-lightHighlight-s1l6 dark:bg-primary-light-s1l1 m-8 px-12 py-3 rounded-full text-primary-light-s1l1 dark:text-primary-dark-s1l1 animate-slidingButton'
            text={text}
            onClick={onClick} />
    );
};

export default BtnSlidingToggle