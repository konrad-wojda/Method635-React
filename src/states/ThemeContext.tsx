import React, { useContext, useState } from "react";
import { Theme } from "../models/models";

const selectedTheme = localStorage.getItem("selectedTheme") as Theme;

const ThemeContext = React.createContext(selectedTheme);
const ThemeUpdateContext = React.createContext(() => {});

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: any) {
    const [darkModeState, setDarkMode] = useState(selectedTheme);
    let isDarkMode = darkModeState === Theme.dark;

    const setModeAttribute = (theme: Theme) => {
        document.querySelector("body")?.setAttribute("data-theme", theme);
        setDataTheme(theme);
    };

    const setDataTheme = (theme: Theme) => {
        localStorage.setItem("selectedTheme", theme);
    };

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        let whatTheme = [Theme.light, Theme.dark][+isDarkMode];
        setDarkMode(whatTheme);
        setModeAttribute(whatTheme);
    }

    const setModeAfterRefresh = () => {
        setModeAttribute([Theme.light, Theme.dark][+isDarkMode]);
    };
    setModeAfterRefresh();

    return (
        <ThemeContext.Provider value={darkModeState}>
            <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}
