import React from 'react';
import styles from './anima.module.css'
import {TbBrandRevolut} from "react-icons/tb";

const Anima = () => {
    return (
        <div className={styles.content}>
            <div className={styles.cube}><TbBrandRevolut /></div>
        </div>
    );
};

export default Anima;
