import React from 'react';
import PageSection from '../components/PageSection.tsx';
import MainPagesNavMenu from '../components/MainPagesNavMenu.tsx'
import TxtSubHeader from '../components/elements/text/TxtSubHeader.tsx';
import TxtBaseXL from '../components/elements/text/TxtBaseXL.tsx';
import TxtBase from '../components/elements/text/TxtBase.tsx';

function LoadPage() {
    return (
        <>
            <MainPagesNavMenu
                title='Contact Me'
                activeLink='contact' />

            <PageSection>
                <div className='bg-primary-light-s1l3'>
                    <br />

                    <TxtSubHeader>
                        <u>Contact Details</u>
                    </TxtSubHeader>
                    <br /><br />

                    <TxtBaseXL>Email</TxtBaseXL>
                    <TxtBase>matthew.xuereb@protonmail.com</TxtBase>
                    <br /><br />

                    <TxtBaseXL>Phone</TxtBaseXL>
                    <TxtBase>356 7931 6589</TxtBase>
                    <br />
                </div>
            </PageSection>

            <br />
        </>
    );
}

export default LoadPage;