'use client'
import React from 'react';
import styles from './loader.module.css'

let text = 'ERROR 404'
const Loader = () => {
    return (
        <>
            <div className={styles.preloader} id="preloader">{text}
                <div className={styles.loader} id="loader"></div>
            </div>
        </>
    );
};

export default Loader;