import React from 'react';
import MainPagesNavMenu from '../../components/MainPagesNavMenu.tsx'

function LoadPage() {
    return (
        <div className="contactMe">
            <MainPagesNavMenu
                title='Contact Me'
                activeLink='contact' />

            <div className="contents_halfWidth" id="contactTab">
                <br />

                <h2>
                    <u>Contact Details</u>
                </h2>
                <br />

                <h3>Email</h3>
                <p>matthew.xuereb@protonmail.com</p>
                <br />

                <h3>Phone</h3>
                <p>356 7931 6589</p>
                <br />
            </div>

            <br />
        </div>
    );
}

export default LoadPage;