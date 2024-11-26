import React from 'react';

const ImgBigLogo = ({ path }) => {
    return (
        <img
            src={path}
            alt='Big Logo'
            className='h-16'
        />
    )
}

export default ImgBigLogo