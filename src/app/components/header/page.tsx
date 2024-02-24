'use client'

import React from 'react';
import styles from './header.module.css'
import Link from "next/link";
import {useTheme} from "../../ThemeContext";

const Header = () => {
    const { toggleTheme, isDarkTheme  } = useTheme();

    const handleButtonClick = () => {
        toggleTheme();
        document.querySelector("#toggle-theme")?.parentElement?.classList.toggle("checked");
    };
    return (
        <header className={styles.header}>
            <nav>
                <Link href={'/pages/main'}>ГЛАВНАЯ</Link>
                <Link href={'/pages/contact'}>КОНТАКТЫ</Link>
                <Link href={'/pages/info'}>ИНФО</Link>
                <Link href={'/pages/draft'}>draft</Link>

            </nav>
            <input onChange={handleButtonClick} className={styles.input} type="checkbox" id="switch"/>
            <label className={styles.label} htmlFor="switch">
                {isDarkTheme
                    ?
                    <span className={styles.spanLight}>Light</span>
                    :
                    <span className={styles.spanNight}>Night</span>}
            </label>
        </header>
    );
};

export default Header;