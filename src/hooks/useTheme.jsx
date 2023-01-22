import {useEffect, useLayoutEffect, useState} from "react";
import {isDarkThemeSelected, isAnyThemeSelected, isPageVisited, userPrefersDark, userPrefersLight} from "@/utils/darkTheme";

export const useTheme = (initialTheme) => {
    const [theme, setThemeState] = useState(initialTheme);

    const setTheme = (theme) => {
        setThemeState(theme);
        localStorage.setItem("theme", theme);
        document.body.setAttribute("data-theme", theme);
    };

    const switchTheme = () => {
        let theme;
        if (!isDarkThemeSelected) {
            theme = "dark";
        } else {
            theme = "light";
        }
        setThemeState(theme);
        localStorage.setItem("theme", theme);
        document.body.setAttribute("data-theme", theme);
    };

    // useLayoutEffect(() => {
    //     // isDarkThemeSelected ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme");
    //     if (isDarkThemeSelected) {
    //         document.body.setAttribute("data-theme", "dark");
    //         setThemeState("dark");
    //     } else {
    //         document.body.removeAttribute("data-theme", "light");
    //         setThemeState("light");
    //     }
    //     if (!isPageVisited && !isAnyThemeSelected) {
    //         if (userPrefersDark) {
    //             // document.body.setAttribute("data-theme", "dark");
    //             // localStorage.setItem("theme", "dark");
    //             setTheme("dark");
    //         }
    //         if (userPrefersLight) {
    //             // document.body.setAttribute("data-theme", "light");
    //             // localStorage.setItem("theme", "light");
    //             setTheme("light");
    //         }
    //     }
    //     window.sessionStorage.setItem("visited", true);
    // });
    // useEffect(() => {
    //     // document.body.setAttribute("data-theme", theme);
    //     localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    // }, [theme]);

    return [theme, setTheme, setThemeState, switchTheme];
};
