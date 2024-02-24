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
        // document.body.classList.toggle('checked');
    };
    return (
        <header className={`${styles.header} ${isDarkTheme ? styles.lightTheme : styles.darkTheme}`}>
            <nav>
                    <Link className={`${isDarkTheme ? styles.lightTheme : styles.darkTheme}`} href={'/pages/main'}>ГЛАВНАЯ</Link>
                    <Link className={`${isDarkTheme ? styles.lightTheme : styles.darkTheme}`} href={'/pages/contact'}>КОНТАКТЫ</Link>
                    <Link className={`${isDarkTheme ? styles.lightTheme : styles.darkTheme}`} href={'/pages/info'}>ИНФО</Link>
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