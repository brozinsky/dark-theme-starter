import {useLayoutEffect} from "react";
import {isDarkThemeSelected, isAnyThemeSelected, isPageVisited, userPrefersDark, userPrefersLight} from "@/utils/darkTheme";
import {useTheme} from "@/hooks/useTheme";

const WithTheme =
    (WrappedComponent) =>
    ({...props}) => {
        const [theme, setTheme, setThemeState] = useTheme("dark");
        useLayoutEffect(() => {
            // isDarkThemeSelected ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme");
            if (isDarkThemeSelected) {
                document.body.setAttribute("data-theme", "dark");
                setThemeState("dark");
            } else {
                document.body.removeAttribute("data-theme", "light");
                setThemeState("light");
            }
            if (!isPageVisited && !isAnyThemeSelected) {
                if (userPrefersDark) {
                    // document.body.setAttribute("data-theme", "dark");
                    // localStorage.setItem("theme", "dark");
                    setTheme("dark");
                }
                if (userPrefersLight) {
                    // document.body.setAttribute("data-theme", "light");
                    // localStorage.setItem("theme", "light");
                    setTheme("light");
                }
            }
            window.sessionStorage.setItem("visited", true);
        });
        // useLayoutEffect(() => {
        //     // const darkThemeSelected =
        //     //   localStorage.getItem("theme") !== null &&
        //     //   localStorage.getItem("theme") === "dark";
        //     // const themeSelected = localStorage.getItem("theme") !== null;
        //     isDarkThemeSelected ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme");
        //     // const visited = window.sessionStorage.getItem('visited') !== null;
        //     if (!isPageVisited && !isAnyThemeSelected) {
        //         // const userPrefersDark =
        //         //   window.matchMedia &&
        //         //   window.matchMedia("(prefers-color-scheme: dark)").matches;
        //         // const userPrefersLight =
        //         //   window.matchMedia &&
        //         //   window.matchMedia("(prefers-color-scheme: light)").matches;
        //         if (userPrefersDark) {
        //             document.body.setAttribute("data-theme", "dark");
        //             localStorage.setItem("theme", "dark");
        //         }
        //         if (userPrefersLight) {
        //             document.body.setAttribute("data-theme", "light");
        //             localStorage.setItem("theme", "light");
        //         }
        //     }
        //     window.sessionStorage.setItem("visited", true);
        // }, []);
        return <WrappedComponent {...props} />;
    };

export default WithTheme;
