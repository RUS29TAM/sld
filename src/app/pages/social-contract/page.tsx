'use client'
import React from 'react';
import { useTheme } from '../../ThemeContext';

import styles from './social-contract.module.css'
import LoadingLane from "@/app/components/loading-lane/loading-lane";


const SocialContract = () => {
    const { isDarkTheme } = useTheme();

    return (
        <>
            <div className={`${styles.container} ${isDarkTheme ? styles.darkTheme : styles.lightTheme }`}>
                <LoadingLane/>
                <h1 className={styles.title}>Цели социального контракта и размеры выплат</h1>
                <div className={styles.subtitle}>
                    <h2 className={styles.h2}>Государство предоставляет социальную помощь в рамках социального контракта
                        по разным
                        направлениям, и каждое направление имеет свои условия финансовой поддержки. Если, например,
                        сумма для обучения составляет не более 30 000 рублей, то для открытия собственного бизнеса
                        предоставляется возможность получить единовременное пособие, которое может достигать 350 000
                        рублей.</h2>
                    <div className={styles.table}>
                        <p>1</p>
                        <p>Поиск работы</p>
                        <p>Размер выплат</p>
                        <p>Выплаты при заключении контракта и три месяца после трудоустройства, стипендия на период
                            обучения, оплачиваемая стажировка
                        </p>
                        <p>2</p>
                        <p>Открытие бизнеса </p>
                        <p>Размер выплат</p>
                        <p>До 350 000 руб.
                        </p>
                        <p>3</p>
                        <p>Развитие подсобного хозяйства</p>
                        <p>Размер выплат</p>
                        <p>До 200 000 руб.
                        </p>
                        <p>4</p>
                        <p>Обучение или переобучение</p>
                        <p>Размер выплат</p>
                        <p>До 30 000 руб. на получение навыков предпринимательской деятельности или ведения хозяйства,
                            на освоение новой профессии</p>
                        <p>5</p>
                        <p>Обучение или переобучение</p>
                        <p>Размер выплат</p>
                        <p>Единоразовая или ежемесячная финансовая помощь
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
};
export default SocialContract;

