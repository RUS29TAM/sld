'use client'

import React from 'react';
import styles from './header.module.css'
import Link from "next/link";
import {useTheme} from "../../ThemeContext";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {BiSolidSun} from "react-icons/bi";

const Header = () => {
    const { toggleTheme, isDarkTheme  } = useTheme();

    const handleButtonClick = () => {
        toggleTheme();
        document.querySelector("#toggle-theme")?.parentElement?.classList.toggle("checked");
        // document.body.classList.toggle('checked');
    };
    return (
        <header className={`${styles.header} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
            <nav>
                    <Link className={`${styles.a} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`} href={'/pages/main'}>ГЛАВНАЯ</Link>
                    <Link className={`${styles.a} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`} href={'/pages/contact'}>КОНТАКТЫ</Link>
                    <Link className={`${styles.a} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`} href={'/pages/local-page'}>ИНФО</Link>
                </nav>
                <input onChange={handleButtonClick} className={styles.input} type="checkbox" id="switch"/>
                <label className={styles.label} htmlFor="switch">
                    {isDarkTheme
                        ?
                        <span className={`${styles.spanLight} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}><BsFillMoonStarsFill /></span>
                        :
                        <span className={`${styles.spanNight} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}><BiSolidSun /></span>}
                </label>
        </header>
    );
};

export default Header;
