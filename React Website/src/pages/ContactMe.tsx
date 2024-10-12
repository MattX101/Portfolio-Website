import React from 'react';
import MainPagesNavMenu from '../components/MainPagesNavMenu.tsx'
import TxtSubHeader from '../components/elements/text/TxtSubHeader.tsx';
import TxtBaseXL from '../components/elements/text/TxtBaseXL.tsx';
import TxtBase from '../components/elements/text/TxtBase.tsx';

function LoadPage() {
    return (
        <div className="contactMe">
            <MainPagesNavMenu
                title='Contact Me'
                activeLink='contact' />

            <div className="contents_halfWidth" id="contactTab">
                <br />

                <TxtSubHeader>
                    <u>Contact Details</u>
                </TxtSubHeader>
                <br />

                <TxtBaseXL>Email</TxtBaseXL>
                <TxtBase>matthew.xuereb@protonmail.com</TxtBase>
                <br />

                <TxtBaseXL>Phone</TxtBaseXL>
                <TxtBase>356 7931 6589</TxtBase>
                <br />
            </div>

            <br />
        </div>
    );
}

export default LoadPage;