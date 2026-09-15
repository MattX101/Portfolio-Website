import React from 'react';
import TxtSubHeader from '../../elements/text/TxtSubHeader.tsx';
import TxtBaseXL from '../../elements/text/TxtBaseXL.tsx';
import TxtBase from '../../elements/text/TxtBase.tsx';

const ContactMeTab = () => {
    return (
        <div className='mx-4'>
            <div className='bg-primary-light-s1l3 dark:bg-primary-dark-s1l1 pb-8'>
                <TxtSubHeader>
                    <u>Contact Details</u>
                </TxtSubHeader>
                <br />

                <div className='block lg:grid lg:grid-cols-2'>
                    <div className='lg:ml-16 lg:mr-2'>
                        <TxtBaseXL>Email Address</TxtBaseXL>
                        <TxtBase>matthew.xuereb@protonmail.com</TxtBase>
                    </div>

                    <br className='block lg:hidden'/>

                    <div className='lg:ml-2 lg:mr-16'>
                        <TxtBaseXL>Phone Number</TxtBaseXL>
                        <TxtBase>356 7931 6589</TxtBase>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMeTab