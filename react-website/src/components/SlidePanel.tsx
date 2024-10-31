import React from 'react';
import { useNavigate } from "react-router-dom";
import BtnTextLink from './elements/buttons/BtnTextLink.tsx';

const SlidePanel = () => {
    const navigate = useNavigate();

    function toggle(value: number) {
        (document.getElementById("slidePanelOverlay") as HTMLElement).style.width = `${value}%`;

        var links = document.getElementsByClassName("txtPageLink");
        for (var i = 0, length = links.length; i < length; i++)
            links[i].style.opacity = `${value}%`;
    }

    return (
        <>
            <BtnTextLink
                className='btnSlidingToggle'
                text='Continue'
                onClick={() => toggle('100')} />

            <div id="slidePanelOverlay">
                <br />

                <BtnTextLink
                    className='txtPageLink'
                    text='Home'
                    onClick={() => navigate('/home')} />
                <BtnTextLink
                    className='txtPageLink'
                    text='About Website'
                    onClick={() => navigate('/about')} />
                <BtnTextLink
                    className='txtPageLink'
                    text='Contact Me'
                    onClick={() => navigate('/contact')} />

                <br />
                <br />

                <BtnTextLink
                    className='txtPageLink txtCloseLink'
                    text='Close'
                    onClick={() => toggle('0')} />

                <br />
            </div>
        </>
    )
}

export default SlidePanel