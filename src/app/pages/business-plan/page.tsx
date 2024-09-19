'use client'
import React from 'react';
import styles from './business-plan.module.css'

import Accordion from "@/app/components/accordion/accordion";
import LoadingLane from "@/app/components/loading-lane/loading-lane";
const Page = () => {
    return (
        <div className={styles.div} >
            <LoadingLane/>
            <Accordion />
        </div>
    );
};

export default Page;
