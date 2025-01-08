import React from 'react';

const PageSection = ({ children }) => {
    return (
        <div className='flex flex-col items-center text-center'>
            <div className="w-4/5 xl:w-3/5 2xl:w-1/2">
                {children}
            </div>
        </div>
    )
}

export default PageSection