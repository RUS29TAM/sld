import React from 'react';
import styles from './franchise-hero.module.css'
import FlipCardFranchise from "@/app/components/frip-card-franchise/flip-card-franchise";

const Page = () => {
    return (
        <div className={styles.wrapper}>
            <FlipCardFranchise />
        </div>
    );
};

export default Page;
