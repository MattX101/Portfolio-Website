import './style/style.css';
import '../../styles/HomePageNavBar.css';
import React from 'react';
import MainPagesNavMenu from '../../components/MainPagesNavMenu.tsx'
import HomePageNavBar from '../../components/home/HomePageNavBar.tsx';

function LoadPage() {
    return (
        <div className="home">
            <MainPagesNavMenu
                title='Home'
                activeLink='home' />

            <HomePageNavBar />
        </div>
    );
}

export default LoadPage;