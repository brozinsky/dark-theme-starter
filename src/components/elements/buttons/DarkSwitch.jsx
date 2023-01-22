import React from "react";
import {useLayoutEffect} from "react";

const DarkSwitch = () => {
    let theme;
    useLayoutEffect(() => {
        if (localStorage) {
            theme = localStorage.getItem("theme");
        }
        if (theme === "light" || theme === "dark") {
            document.body.setAttribute("data-theme", theme);
        } else {
            document.body.setAttribute("data-theme", "light");
        }
    });

    const switchTheme = (e) => {
        if (theme === "dark") {
            document.body.setAttribute("data-theme", "light");
            e.target.classList.remove("clicked");
            localStorage.setItem("theme", "light");
            theme = "light";
        } else {
            document.body.setAttribute("data-theme", "dark");
            e.target.classList.add("clicked");
            localStorage.setItem("theme", "dark");
            theme = "dark";
        }
    };

    return (
        <div className="theme-switch">
            <input id="toggle" className={`theme-switch__input ${theme === "dark" ? "clicked" : ""}`} type="checkbox" role="switch" name="toggle" value={theme} onChange={(e) => switchTheme(e)} />
            <label htmlFor="toggle" className="theme-switch__label cursor-pointer">
                <span className={`theme-switch__icon theme-switch__icon--light`}>
                    <svg className="h-full w-full" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M52.3636 39.0016L36 22.7282L23.1818 35.5469L39.4545 51.8203L52.3636 39.0016ZM27.2727 90.4583H0V108.641H27.2727V90.4583ZM109.091 0H90.9091V26.8193H109.091V0ZM176.818 35.5469L164 22.7282L147.727 39.0016L160.545 51.8203L176.818 35.5469ZM147.636 160.097L163.909 176.462L176.727 163.643L160.364 147.37L147.636 160.097ZM172.727 90.4583V108.641H200V90.4583H172.727ZM100 45.0018C69.9091 45.0018 45.4545 69.4574 45.4545 99.5495C45.4545 129.642 69.9091 154.097 100 154.097C130.091 154.097 154.545 129.642 154.545 99.5495C154.545 69.4574 130.091 45.0018 100 45.0018ZM90.9091 199.099H109.091V172.28H90.9091V199.099ZM23.1818 163.552L36 176.371L52.2727 160.007L39.4545 147.188L23.1818 163.552Z"
                            fill="#111827"
                        />
                    </svg>
                </span>
                <span className={`theme-switch__icon theme-switch__icon--dark`}>
                    <svg className="h-full w-full" width="169" height="169" viewBox="0 0 169 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M168.676 106.194C164.639 120.644 156.889 133.785 146.198 144.309C135.506 154.834 122.246 162.376 107.735 166.185C93.2246 169.994 77.9698 169.937 63.4883 166.019C49.0067 162.102 35.8031 154.461 25.1909 143.856C14.5786 133.251 6.92752 120.053 2.99875 105.573C-0.930009 91.0931 -0.999547 75.837 2.79706 61.322C6.59366 46.807 14.1241 33.5392 24.6393 22.8381C35.1544 12.1371 48.2878 4.37599 62.7331 0.326726C63.7914 -0.014093 64.9173 -0.0896859 66.0117 0.106593C67.1061 0.302871 68.1356 0.76501 69.0095 1.45239C69.8835 2.13976 70.5753 3.03133 71.024 4.04872C71.4728 5.06611 71.6648 6.17817 71.5831 7.28714C71.5808 7.81322 71.4938 8.3355 71.3253 8.8339C67.9165 21.1388 67.8324 34.1278 71.0815 46.4759C74.3306 58.8239 80.7967 70.089 89.8201 79.122C98.8435 88.155 110.101 94.6326 122.445 97.894C134.789 101.155 147.777 101.084 160.084 97.6866L161.974 97.3429C163.469 97.3311 164.928 97.8011 166.135 98.6833C167.342 99.5655 168.233 100.813 168.676 102.241C169.108 103.523 169.108 104.912 168.676 106.194Z"
                            fill="#d1d5db"
                        />
                    </svg>
                </span>
            </label>
        </div>
    );
};

export default DarkSwitch;
