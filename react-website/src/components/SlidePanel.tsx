import React from 'react';
import { useNavigate } from "react-router-dom";
import BtnPageLink from './elements/buttons/textLink/BtnPageLink.tsx';
import BtnClosePageLink from './elements/buttons/textLink/BtnClosePageLink.tsx';
import BtnSlidingToggle from './elements/buttons/textLink/BtnSlidingToggle.tsx';

const closedPanel = 'animate-slideOverlay_Close bg-primary-light-s1l2 fixed overflow-hidden h-full w-0 top-0 left-0 flex flex-col items-center justify-center'
const openedPanel = 'animate-slideOverlay_Open bg-primary-light-s1l2 fixed overflow-hidden h-full w-full top-0 left-0 flex flex-col items-center justify-center'

const SlidePanel = () => {
    const navigate = useNavigate();

    function openOverlay() {
        (document.getElementById("sldPanelOverlay") as HTMLElement).className = openedPanel;
    }

    function closeOverlay() {
        (document.getElementById("sldPanelOverlay") as HTMLElement).className = closedPanel;
    }

    return (
        <>
            <BtnSlidingToggle
                text='Continue'
                onClick={() => openOverlay()} />

            <div id="sldPanelOverlay" className={closedPanel}>
                <br />

                <BtnPageLink
                    text='Home'
                    onClick={() => navigate('/home')} />
                <BtnPageLink
                    text='About Website'
                    onClick={() => navigate('/about')} />
                <BtnPageLink
                    text='Contact Me'
                    onClick={() => navigate('/contact')} />

                <div className='my-8' />

                <BtnClosePageLink
                    text='Close'
                    onClick={() => closeOverlay()} />

                <br />
            </div>
        </>
    )
}

export default SlidePanel