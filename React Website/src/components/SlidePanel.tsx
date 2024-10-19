import React from 'react';
import { useNavigate } from "react-router-dom";
import BtnTextLink from './elements/buttons/BtnTextLink.tsx';

const SlidePanel = () => {
    const navigate = useNavigate();

    function toggle(value) {
        (document.getElementById("slideOverlay") as HTMLElement).style.width = `${value}%`;

        var links = document.getElementsByClassName("linkText");
        for (var i = 0, length = links.length; i < length; i++)
            links[i].style.opacity = `${value}%`;
    }

    return (
        <>
            <BtnTextLink
                className='slideButton'
                text='Continue'
                onClick={() => toggle('100')} />

            <div id="slideOverlay" className="overlay">
                <div className="overlay-content">
                    <br />

                    <BtnTextLink
                        className='linkText'
                        text='Home'
                        onClick={() => navigate('/home')} />
                    <BtnTextLink
                        className='linkText'
                        text='About Website'
                        onClick={() => navigate('/about')} />
                    <BtnTextLink
                        className='linkText'
                        text='Contact Me'
                        onClick={() => navigate('/contact')} />

                    <br />
                    <br />

                    <BtnTextLink
                        className='linkText closeText'
                        text='Close'
                        onClick={() => toggle('0')} />

                    <br />
                </div>
            </div>
        </>
    )
}

export default SlidePanel