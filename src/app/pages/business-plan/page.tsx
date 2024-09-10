'use client'
import React from 'react';
import styles from './business-plan.module.css'

import QuestionsList from "@/app/components/questions-list/Questions-list";
const Page = () => {
    return (
        <div className={styles.div} >
            <QuestionsList />
        </div>
    );
};

export default Page;
