import {useEffect, useLayoutEffect, useState} from "react";

export const useTheme = (initialTheme) => {
    //   const [theme, setTheme] = useState(initialTheme);

    const handleChange = (e) => setTheme(e.target.checked ? "dark" : "light");

    const setTheme = (theme) => {};

    useLayoutEffect(() => {
        const darkThemeSelected = localStorage.getItem("theme") !== null && localStorage.getItem("theme") === "dark";
        const themeSelected = localStorage.getItem("theme") !== null;
        darkThemeSelected ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme");
        const visited = window.sessionStorage.getItem("visited") !== null;
        if (!visited && !themeSelected) {
            const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            const userPrefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
            if (userPrefersDark) {
                document.body.setAttribute("data-theme", "dark");
                localStorage.setItem("darkSwitch", "dark");
            }
            if (userPrefersLight) {
                document.body.setAttribute("data-theme", "default");
                localStorage.removeItem("darkSwitch");
            }
        }
        window.sessionStorage.setItem("visited", true);

        // const isBrowserDefaultDark = () =>
        //   window.matchMedia("(prefers-color-scheme: dark)").matches;
        // const getDefaultTheme = () => {
        //   const localStorageTheme = localStorage.getItem("theme");
        //   const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
        //   console.log("localStorageTheme", localStorageTheme);
        //   //   console.log("browserDefault", browserDefault);

        //   let returnValue;
        //   if (!localStorageTheme) {
        //     return (returnValue = browserDefault);
        //   } else if (localStorageTheme !== browserDefault) {
        //     return (returnValue = localStorageTheme);
        //   } else if (localStorageTheme === browserDefault) {
        //     return (returnValue = localStorageTheme);
        //   }

        //   return returnValue;
        // };
        // // console.log(`default theme is ${getDefaultTheme()}`);
        // setTheme(getDefaultTheme());
    }, []);

    useEffect(() => {
        // document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    }, [theme]);

    const setLocalStorageTheme = (theme) => {
        document.body.setAttribute("data-theme", theme);
    };

    return [theme, setTheme, setLocalStorageTheme];
};
