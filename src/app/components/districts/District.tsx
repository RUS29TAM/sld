import React from 'react';
import styles from './district.module.css'
import CardsGrid from "@/app/components/cardsGrid/CardsGrid";
import {contentData} from "@/utils/contentData";
import EconomyQuestions from "@/app/components/questions/economy-questions/economy-questions";

const District = () => {
    return (
        <div className={styles.wrapper}>
            <EconomyQuestions />
        </div>
    );
};

export default District;
