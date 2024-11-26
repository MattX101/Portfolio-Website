import React from 'react';

const ImgSmallLogo = ({ path }) => {
    return (
        <img
            src={path}
            alt='Small Logo'
            className='h-8'
        />
    )
}

export default ImgSmallLogo