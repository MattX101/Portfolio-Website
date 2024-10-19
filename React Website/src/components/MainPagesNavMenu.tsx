import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TxtHeader from '../components/elements/text/TxtHeader.tsx';
import BtnButton from '../components/elements/buttons/BtnButton.tsx';

const NavMenu = ({ title, activeLink }) => {
    const navigate = useNavigate();

    useEffect(() => {
        var activeLinkElement = document.getElementById(activeLink) as HTMLElement;
        activeLinkElement.disabled = true;
        activeLinkElement.className = "activePage";
    });

    return (
        <>
            <header>
                <TxtHeader>{title}</TxtHeader>
            </header>

            <div id="linksRow">
                <BtnButton
                    text='Home'
                    id='home'
                    className={null}
                    onAction={() => navigate('/home')} />
                <BtnButton
                    text='About Website'
                    id='about'
                    className={null}
                    onAction={() => navigate('/about')} />
                <BtnButton
                    text='Contact Me'
                    id='contact'
                    className={null}
                    onAction={() => navigate('/contact')} />
            </div>

            <br />
        </>
    );
}

export default NavMenu;