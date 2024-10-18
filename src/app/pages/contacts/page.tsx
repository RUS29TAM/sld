'use client'
import React from 'react';
import LoadingLane from "@/app/components/loading-lane/loading-lane";
import styles from './contacts.module.css'
import style2 from '@/app/components/footer/footer.module.css'
import {useTheme} from "@/app/ThemeContext";
import Link from "next/link";

const Page = () => {
    const { isDarkTheme } = useTheme();

    return (
        <div>
            <LoadingLane/>
            <div className={`${styles.container} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                <div className={`${styles.card} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                    <p>АНО АО &laquo;Агентство регионального развития&raquo;</p>
                    <p>г. Архангельск, Наб.Северной Двины, 71</p>
                    <p>Телефон: <span style={{fontWeight: "bold"}}>8 800 100 7000</span> </p>
                    <p>e-mail: <span style={{fontWeight: "bold"}}>office@msp29.ru</span> </p>

                </div>
                <Link className={style2.link} href={'https://github.com/RUS29TAM'} target={"_blank"}>
                <div className={`${styles.card} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                    <nav className={`${styles.nav}`}>

                            <span className={`${style2.span}`}>Д</span>
                            <span className={`${style2.span}`}>И</span>
                            <span className={`${style2.span}`}>З</span>
                            <span className={`${style2.span}`}>А</span>
                            <span className={`${style2.span}`}>Й</span>
                            <span className={`${style2.span}`}>Н</span>
                            <span className={`${style2.span}`}> </span>
                            <span className={`${style2.span}`}> </span>
                            <span className={`${style2.span}`}> </span>
                            <span className={`${style2.span}`}> </span>
                            <span className={`${style2.span}`}> </span>
                            <span className={`${style2.span}`}>&copy;</span>
                            <span className={`${style2.span}`}>R</span>
                            <span className={`${style2.span}`}>U</span>
                            <span className={`${style2.span}`}>S</span>
                            <span className={`${style2.span}`}>2</span>
                            <span className={`${style2.span}`}>9</span>
                            <span className={`${style2.span}`}>T</span>
                            <span className={`${style2.span}`}>A</span>
                            <span className={`${style2.span}`}>M</span>
                    </nav>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Page;
