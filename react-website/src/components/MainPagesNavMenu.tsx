import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TxtHeader from '../components/elements/text/TxtHeader.tsx';
import BtnButton from '../components/elements/buttons/BtnButton.tsx';

const tab = 'h-10 text-center bg-primary-lightHighlight-s2l3 animate-mainPageNavBar_OnHoverExit hover:h-12 hover:underline hover:bg-primary-lightHighlight-s2l4 hover:animate-mainPageNavBar_OnHoverEnter';

const NavMenu = ({ title, activeLink }) => {
    const navigate = useNavigate();

    useEffect(() => {
        var activeLinkElement = document.getElementById(activeLink) as HTMLElement;
        activeLinkElement.disabled = true;
        activeLinkElement.className = "h-12 font-bold underline pointer-events-none bg-primary-lightHighlight-s2l1";
    });

    return (
        <>
            <header className='bg-primary-lightHighlight-s2l1 p-12 text-center'>
                <TxtHeader>{title}</TxtHeader>
            </header>

            <div className='grid grid-cols-3 grid-rows-1'>
                <BtnButton
                    text='Home'
                    id='home'
                    className={tab}
                    onAction={() => navigate('/home')} />
                <BtnButton
                    text='About Website'
                    id='about'
                    className={tab}
                    onAction={() => navigate('/about')} />
                <BtnButton
                    text='Contact Me'
                    id='contact'
                    className={tab}
                    onAction={() => navigate('/contact')} />
            </div>

            <br />
        </>
    );
}

export default NavMenu;