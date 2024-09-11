'use client'
import React from 'react';
import styles from './business-plan.module.css'

import Accordion from "@/app/components/accordion/accordion";
const Page = () => {
    return (
        <div className={styles.div} >
            <Accordion />
        </div>
    );
};

export default Page;
