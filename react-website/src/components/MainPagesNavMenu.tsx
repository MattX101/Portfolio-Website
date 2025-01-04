import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TxtHeader from '../components/elements/text/TxtHeader.tsx';
import BtnButton from '../components/elements/buttons/BtnButton.tsx';

const tab = 'h-10 text-center bg-primary-light-s1l4 dark:bg-primary-darkHighlight-s2l4 ';
const animation = 'animate-mainPageNavBar_OnHoverExit hover:animate-mainPageNavBar_OnHoverEnter ';
const hover = 'hover:h-12 ';
const underline = 'hover:underline decoration-primary-dark-s3l6 hover:dark:decoration-primary-light-s3l6 ';
const buttonStyle = tab + animation + hover + underline;

const NavMenu = ({ title, activeLink }) => {
    const navigate = useNavigate();

    useEffect(() => {
        var activeLinkElement = document.getElementById(activeLink) as HTMLElement;
        activeLinkElement.disabled = true;
        activeLinkElement.className = 
        "h-12 font-bold underline pointer-events-none bg-primary-light-s1l3 decoration-primary-dark-s3l6 dark:bg-primary-dark-s1l1 dark:decoration-primary-light-s3l6";
    });

    return (
        <>
            <header className='bg-primary-light-s1l3 dark:bg-primary-dark-s1l1 p-6 text-center'>
                <TxtHeader>{title}</TxtHeader>
            </header>

            <div className='grid grid-cols-3 grid-rows-1'>
                <BtnButton
                    text='Home'
                    id='home'
                    className={buttonStyle}
                    onAction={() => navigate('/home')} />
                <BtnButton
                    text='About Website'
                    id='about'
                    className={buttonStyle}
                    onAction={() => navigate('/about')} />
                <BtnButton
                    text='Contact Me'
                    id='contact'
                    className={buttonStyle}
                    onAction={() => navigate('/contact')} />
            </div>

            <br />
        </>
    );
}

export default NavMenu;