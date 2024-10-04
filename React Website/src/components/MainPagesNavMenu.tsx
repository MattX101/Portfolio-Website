import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/css/components/MainPagesNavMenu.css';

const NavMenu = ({title, activeLink}) => {
    const navigate = useNavigate();

    useEffect(() => {
        var activeLinkElement = document.getElementById(activeLink) as HTMLElement;
        activeLinkElement.disabled = true;
        activeLinkElement.className = "activePage";
        /*activeLinkElement.style.pointerEvents = 'none';
        activeLinkElement.style.backgroundColor = "#1e3a8a";
        activeLinkElement.style.color = "#bfdbfe";
        activeLinkElement.style.bottom = "0vmin";*/
    });

    return (
        <>
            <header>
                <h1>{title}</h1>
            </header>

            <div id="linksRow">
                <button id="home" onClick={() => navigate('/home')}>
                    <b>Home</b>
                </button>
                <button id="about" onClick={() => navigate('/about')}>
                    <b>About Website</b>
                </button>
                <button id="contact" onClick={() => navigate('/contact')}>
                    <b>Contact Me</b>
                </button>
            </div>
            
            <br/>
        </>
    );
}

export default NavMenu;