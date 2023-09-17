import React from 'react';
import MainPagesNavMenu from '../../components/MainPagesNavMenu.tsx'

function LoadPage() {
    return (
        <div className="home">
            <MainPagesNavMenu
                title='Home'
                activeLink='home' />
        </div>
    );
}

export default LoadPage;