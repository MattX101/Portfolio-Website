import React from 'react';

const TxtHeader = ({ children }) => {
    return (
        <div className='text-primary-dark-s1l1 text-2xl font-bold'>
            {children}
        </div>
    );
};

export default TxtHeader