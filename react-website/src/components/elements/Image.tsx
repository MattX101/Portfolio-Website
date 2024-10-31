import React from 'react';

const Image = ({ path, className }) => {
    return (
        <img src={path} className={className} alt="logo" />
    )
}

export default Image