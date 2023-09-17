import React from 'react';
import MainPagesNavMenu from '../../components/MainPagesNavMenu.tsx'

function LoadPage() {
    return (
        <div className="contactMe">
            <MainPagesNavMenu
                title='Contact Me'
                activeLink='contact' />
        </div>
    );
}

export default LoadPage;