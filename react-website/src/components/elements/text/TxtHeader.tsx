import React from 'react';

const TxtHeader = ({ children }) => {
    return (
        <div className='font-bold text-2xl text-primary-dark-s1l1 dark:text-primary-light-s1l1'>
            {children}
        </div>
    );
};

export default TxtHeader