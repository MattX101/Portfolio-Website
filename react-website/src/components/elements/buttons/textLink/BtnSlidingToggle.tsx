import React from 'react';
import BtnTextLink from '../BtnTextLink.tsx';

const BtnSlidingToggle = ({ text, onClick }) => {
    return (
        <BtnTextLink
            className='animate-slidingButton bg-primary-dark-s1l1 text-primary-light-s1l1 hover:bg-primary-darkHighlight-s1l6 px-12 py-3 m-8 rounded-full'
            text={text}
            onClick={onClick} />
    );
};

export default BtnSlidingToggle