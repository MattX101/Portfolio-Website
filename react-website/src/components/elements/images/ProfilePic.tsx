import React from 'react';
import Image from '../../../images/Profile Pic.png';

const ProfilePic = () => {
    return (
        <img
            src={Image}
            alt='Profile Pic'
            className=' border-primary-dark-s1l1 h-64 sm:h-72 md:h-96 border-solid border-8 rounded-full pointer-events-none'
        />
    )
}

export default ProfilePic