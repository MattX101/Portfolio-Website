import React from 'react';

const TxtSubHeader = ({ children }) => {
    return (
        <div className='font-bold text-primary-darkHighlight-s1l1 text-xl dark:text-primary-lightHighlight-s1l1'>
            {children}
        </div>
    );
};

export default TxtSubHeader