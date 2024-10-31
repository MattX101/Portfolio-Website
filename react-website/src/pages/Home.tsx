import React from 'react';
import MainPagesNavMenu from '../components/MainPagesNavMenu.tsx'
import HomePageNavBar from '../components/home/HomePageNavBar.tsx';

function LoadPage() {
    return (
        <>
            <MainPagesNavMenu
                title='Home'
                activeLink='home' />

            <HomePageNavBar />
        </>
    );
}

export default LoadPage;