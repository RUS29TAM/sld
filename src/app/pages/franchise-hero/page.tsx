import React from 'react';
import styles from './franchise-hero.module.css'
import FlipCardFranchise from "@/app/components/frip-card-franchise/flip-card-franchise";
import LoadingLane from "@/app/components/loading-lane/loading-lane";

const Page = () => {
    return (
        <div className={styles.wrapper}>
            <LoadingLane/>
            <FlipCardFranchise />
        </div>
    );
};

export default Page;
