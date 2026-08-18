import { useState } from "react";
import LightLogo from "../../../images/modes/Light Mode.png"
import DarkLogo from "../../../images/modes/Dark Mode.png"

export default function BtnToggleColourMode() {
  var isLightMode = true;

  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark", isLightMode);

    isLightMode = !isLightMode;
    (document.getElementById("globalColourMode") as HTMLElement).className = isLightMode ? "" : "dark";
    (document.getElementById("colourModeImg") as HTMLImageElement).src = isLightMode ? LightLogo : DarkLogo;
  
    setIsDark(isLightMode);
};

  return (
    <button
      onClick={toggleTheme}
      className="right-0 bottom-0 fixed bg-primary-dark-s1l1 dark:bg-primary-light-s1l1 m-4 p-1 rounded-full font-bold text-primary-light-s1l1 dark:text-primary-dark-s1l1">
      <img id="colourModeImg" src={LightLogo} className="w-8 h-8" />
    </button>
  );
}
