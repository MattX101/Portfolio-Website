import React from 'react';
import TxtSubHeader from '../../elements/text/TxtSubHeader.tsx';
import TxtBaseXL from '../../elements/text/TxtBaseXL.tsx';
import TxtBase from '../../elements/text/TxtBase.tsx';

const ContactMeTab = () => {
    return (
        <div className='mt-2 mr-2'>
            <div className='bg-primary-light-s1l3 dark:bg-primary-dark-s1l1 py-4'>
                <TxtSubHeader>
                    <u>Contact Details</u>
                </TxtSubHeader>
                <br />

                <TxtBaseXL>Email</TxtBaseXL>
                <TxtBase>matthew.xuereb@</TxtBase>
                <TxtBase>protonmail.com</TxtBase>
                <br />

                <TxtBaseXL>Phone</TxtBaseXL>
                <TxtBase>356 7931 6589</TxtBase>
            </div>
        </div>
    )
}

export default ContactMeTab