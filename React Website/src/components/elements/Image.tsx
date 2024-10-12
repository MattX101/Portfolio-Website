import React from 'react';

const Image = ({ path, name }) => {
    return (
        <img src={path} className={name} alt="logo" />
    )
}

export default Image