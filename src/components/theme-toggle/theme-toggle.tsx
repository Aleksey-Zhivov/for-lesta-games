import { FC, useState, useEffect } from "react";
import "./theme-toggle.scss";

export const ThemeToggle: FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [isDarkTheme]);

        const handleToggle = () => {
        setIsDarkTheme(!isDarkTheme);
    };


    return (
        <div className={`theme-toggle ${isDarkTheme ? "dark" : ""}`} onClick={handleToggle}>
        <div className={`toggle-thumb ${isDarkTheme ? "dark" : "light"}`} />
        </div>
    );
};
