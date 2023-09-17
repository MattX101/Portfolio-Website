import React from 'react';
import MainPagesNavMenu from '../../components/MainPagesNavMenu.tsx'

function LoadPage() {
    return (
        <div className="aboutWebsite">
            <MainPagesNavMenu
                title='About Website'
                activeLink='about' />
        </div>
    );
}

export default LoadPage;