import React from 'react';

const ContentSection = ({ children }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='m-2 sm:m-0'>
                {children}
            </div>
        </div>
    )
}

export default ContentSection