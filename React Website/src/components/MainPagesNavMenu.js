import { useEffect } from 'react';
import '../styles/MainPagesNavMenu.css';

const NavMenu = ({title, activeLink}) => {
    useEffect(() => {
        var activeLinkElement = document.getElementById(activeLink);
        activeLinkElement.disabled = true;
        activeLinkElement.style.pointerEvents = 'none';
        activeLinkElement.style.backgroundColor = "#081f37";
        activeLinkElement.style.color = "#2e79ba";
    });

    function loadURL(url) {
        window.location.href = "http://localhost:3000/" + url;
    }

    return (
        <div>
            <header>
                <h1>{title}</h1>
            </header>

            <div id="linksRow">
                <button id="home" onClick={() => loadURL('home')}>
                    <b>Home</b>
                </button>
                <button id="about" onClick={() => loadURL('about')}>
                    <b>About Website</b>
                </button>
                <button id="contact" onClick={() => loadURL('contact')}>
                    <b>Contact Me</b>
                </button>
            </div>
        </div>
    );
}

export default NavMenu;