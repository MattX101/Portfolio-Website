import React from 'react';
import LightLogo from "../../../images/modes/Light Mode.png"
import DarkLogo from "../../../images/modes/Dark Mode.png"

var isLightMode = true;

const BtnToggleColourMode = () => {
    function toggleMode() {
        isLightMode = !isLightMode;
        (document.getElementById("globalColourMode") as HTMLElement).className = isLightMode ? "" : "dark";
        (document.getElementById("colourModeImg") as HTMLImageElement).src = isLightMode ? LightLogo : DarkLogo;
    }

    return (
        <button
            className="right-0 bottom-0 fixed bg-primary-dark-s1l1 dark:bg-primary-light-s1l1 m-4 p-1 rounded-full font-bold text-primary-light-s1l1 dark:text-primary-dark-s1l1"
            onClick={toggleMode}>
            <img id="colourModeImg" src={LightLogo} className="w-8 h-8" />
        </button>
    );
};

export default BtnToggleColourMode