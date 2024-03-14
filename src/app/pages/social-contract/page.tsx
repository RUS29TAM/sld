'use client'
import React, {useState} from 'react';
import { useTheme } from '../../ThemeContext';

import styles from './social-contract.module.css'
import LoadingLane from "@/app/components/loading-lane/loading-lane";
import FlipCard from "@/app/components/flip-card/flip-card";

const cardData = [
    { num: 1, frontContent: 'Поиск работы', backContent: 'Выплаты при заключении контракта и три месяца после трудоустройства, стипендия на период обучения, оплачиваемая стажировка' },
    { num: 2, frontContent: 'Открытие бизнеса', backContent: 'До 350 000 руб.' },
    { num: 3, frontContent: 'Развитие подсобного хозяйства', backContent: 'До 200 000 руб.' },
    { num: 4, frontContent: 'Обучение или переобучение', backContent: 'До 30 000 руб. на получение навыков предпринимательской деятельности или ведения хозяйства, на освоение новой профессии' },
    { num: 5, frontContent: 'Преодоление сложной жизненной ситуации', backContent: 'Единоразовая или ежемесячная финансовая помощь' },
];
const SocialContract = () => {
    const { isDarkTheme } = useTheme();
    const [cardStates, setCardStates] = useState([false, false, false, false, false]);

    const handleCardClick = (index: number) => {
        const updatedCardStates = cardStates.map((state, i) => (i === index ? !state : false));
        setCardStates(updatedCardStates);
    };
    return (
        <>
            <div className={`${styles.container} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                <LoadingLane/>
                <h1 className={styles.title}>Цели социального контракта и размеры выплат</h1>
                <h2 className={styles.subtitle}>Государство предоставляет социальную помощь в рамках социального контракта
                    по разным
                    направлениям, и каждое направление имеет свои условия финансовой поддержки. Если, например,
                    сумма для обучения составляет не более 30 000 рублей, то для открытия собственного бизнеса
                    предоставляется возможность получить единовременное пособие, которое может достигать 350 000
                    рублей.</h2>
                <div className={styles.cardContainer}>
                    {cardData.map((data, index) => (
                        <FlipCard
                            key={index}
                            isOpen={cardStates[index]}
                            onClick={() => handleCardClick(index)}
                            num={data.num}
                            frontContent={data.frontContent}
                            backContent={data.backContent}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
export default SocialContract;

