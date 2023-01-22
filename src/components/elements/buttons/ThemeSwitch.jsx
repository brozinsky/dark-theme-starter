import React from "react";
import {isDarkThemeSelected, isPageVisited, userPrefersDark, userPrefersLight} from "@/utils/darkTheme";
import {useTheme} from "@/hooks/useTheme";

const ThemeSwitch = () => {
    const [theme, setTheme, switchTheme] = useTheme();

    const handleChange = () => {
        // document.body.setAttribute("data-theme", e.target.checked ? "dark" : "light");
        // console.log(isDarkThemeSelected);
        console.log(localStorage.getItem("theme") !== null);
        console.log(localStorage.getItem("theme") === "dark");
        switchTheme();
        // if (!isDarkThemeSelected) {
        //     setTheme("dark");
        //     // localStorage.setItem("theme", "dark");
        //     // document.body.setAttribute("data-theme", "dark");
        // } else {
        //     setTheme("light");
        //     // localStorage.setItem("theme", "light");
        //     // document.body.setAttribute("data-theme", "light");
        // }
    };

    return (
        <div>
            <input id="toggle" className="toggle" type="checkbox" role="switch" name="toggle" value={theme} onChange={handleChange} />
            <label htmlFor="toggle" className="slot">
                <span className="slot__label text-red-500">OFF</span>
                <span className="slot__label">ON</span>
            </label>
            <div className="curtain"></div>
        </div>
    );
};

export default ThemeSwitch;
