import React from 'react';
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav>
                <Link className={styles.link} href={'https://github.com/RUS29TAM'} target={"_blank"}>
                    <span className={`text text_type_main-default ${styles.span}`}>C</span>
                    <span className={`text text_type_main-default ${styles.span}`}>R</span>
                    <span className={`text text_type_main-default ${styles.span}`}>E</span>
                    <span className={`text text_type_main-default ${styles.span}`}>A</span>
                    <span className={`text text_type_main-default ${styles.span}`}>T</span>
                    <span className={`text text_type_main-default ${styles.span}`}>E</span>
                    <span className={`text text_type_main-default ${styles.span}`}>D</span>
                    <span className={`text text_type_main-default ${styles.span}`}> </span>
                    <span className={`text text_type_main-default ${styles.span}`}>B</span>
                    <span className={`text text_type_main-default ${styles.span}`}>Y</span>
                    <span className={`text text_type_main-default ${styles.span}`}> </span>
                    <span className={`text text_type_main-default ${styles.span}`}>&copy;</span>
                    <span className={`text text_type_main-default ${styles.span}`}>R</span>
                    <span className={`text text_type_main-default ${styles.span}`}>U</span>
                    <span className={`text text_type_main-default ${styles.span}`}>S</span>
                    <span className={`text text_type_main-default ${styles.span}`}>2</span>
                    <span className={`text text_type_main-default ${styles.span}`}>9</span>
                    <span className={`text text_type_main-default ${styles.span}`}>T</span>
                    <span className={`text text_type_main-default ${styles.span}`}>A</span>
                    <span className={`text text_type_main-default ${styles.span}`}>M</span>
                </Link>
            </nav>
        </footer>
    );
};

export default Footer;
