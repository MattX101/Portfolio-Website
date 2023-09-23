import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/SlidePanel.css';

const SlidePanel = () => {
    const navigate = useNavigate();

    function toggle(value) {
        (document.getElementById("slideOverlay") as HTMLElement).style.width = `${value}%`;

        var links = document.getElementsByClassName("linkText");
        for (var i = 0, length = links.length; i < length; i++)
            links[i].style.opacity = `${value}%`;
    }

    return (
        <div>
            <button id="slideButton" onClick={() => toggle('100')}>
                <b>Continue</b>
            </button>

            <div id="slideOverlay" className="overlay">
                <div className="overlay-content">
                    <br />

                    <p className="linkText" onClick={() => navigate('/home')}><b>Home</b></p>
                    <p className="linkText" onClick={() => navigate('/about')}><b>About Website</b></p>
                    <p className="linkText" onClick={() => navigate("/contact")}><b>Contact Me</b></p>

                    <br />
                    <br />

                    <p className="linkText" id="closeText" onClick={() => toggle('0')}><b>Close</b></p>

                    <br />
                </div>
            </div>
        </div>
    )
}

export default SlidePanel