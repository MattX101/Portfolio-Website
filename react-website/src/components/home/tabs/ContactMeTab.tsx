import React from 'react';
import PageSection from '../../PageSection.tsx';
import TxtSubHeader from '../../elements/text/TxtSubHeader.tsx';
import TxtBaseXL from '../../elements/text/TxtBaseXL.tsx';
import TxtBase from '../../elements/text/TxtBase.tsx';

const ContactMeTab = () => {
    return (
        <>
            <PageSection>
                <div className='bg-primary-light-s1l3 dark:bg-primary-dark-s1l1'>
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
        </>
    )
}

export default ContactMeTab