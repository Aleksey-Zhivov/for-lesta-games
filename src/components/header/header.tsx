import { FC } from "react";
import './header.scss';
import { ThemeToggle } from "../theme-toggle/theme-toggle";

export const Header: FC = () => (
    <header className="header">
        {/* Если бы у нас было какое-то меню, то мы бы пользовали Nav, но 
        у нас пока нет ничего, поэтому просто лине и переключатель темы */}
        <a href="https://korabli.su/" className="header__link">
            <img src="public/logo_mk.svg" alt="Logo" className="header__logo" />
        </a>
        <ThemeToggle />
    </header>
)