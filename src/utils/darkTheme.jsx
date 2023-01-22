export const isDarkThemeSelected = localStorage.getItem("theme") !== null && localStorage.getItem("theme") === "dark";

export const isAnyThemeSelected = localStorage.getItem("theme") !== null;

export const isPageVisited = window.sessionStorage.getItem("visited") !== null;

export const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

export const userPrefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
