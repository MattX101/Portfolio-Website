import React from 'react';
import Image from '../../../images/Profile Pic.png';

const ProfilePic = () => {
    return (
        <img
            src={Image}
            alt='Profile Pic'
            className='border-8 border-primary-dark-s1l1 dark:border-primary-light-s1l1 border-solid rounded-full h-64 sm:h-72 md:h-96 pointer-events-none'
        />
    )
}

export default ProfilePic