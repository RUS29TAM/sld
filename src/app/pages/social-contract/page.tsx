'use client'
import React, {useEffect, useState} from 'react';
import {useTheme} from '../../ThemeContext';
import styles from './social-contract.module.css'
import LoadingLane from "@/app/components/loading-lane/loading-lane";
import FlipCard from "@/app/components/flip-card/flip-card";
import {flipCardData} from "@/utils/flipCardData";

const SocialContract = () => {
    const {isDarkTheme} = useTheme();
    const [cardStates, setCardStates] = useState([false, false, false, false, false]);
    const [flipSequence, setFlipSequence] = useState<number[]>([]);
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
    const handleCardClick = (index: number) => {
        const updatedCardStates = cardStates.map((state, i) => (i === index ? !state : false));
        setCardStates(updatedCardStates);
    };

    // Анимация открытия карточек при первом рендере
    useEffect(() => {
        const sequence = async () => {
            for (let i = 0; i < flipCardData.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 200)); // Задержка перед переворотом каждой карточки
                setFlipSequence((prev) => [...prev, i]);

                await new Promise((resolve) => setTimeout(resolve, 150)); // Держим карточку открытой
                setFlipSequence((prev) => prev.filter((index) => index !== i)); // Возвращаем карточку в исходное состояние
            }
        };
        sequence();
    }, []);

    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.container} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                <LoadingLane/>
                <h1 className={styles.title}>Цели социального контракта и размеры выплат</h1>
                <h2 className={styles.subtitle}>Государство предоставляет социальную помощь в рамках социального
                    контракта
                    по разным
                    направлениям, и каждое направление имеет свои условия финансовой поддержки. Если, например,
                    сумма для обучения составляет не более 30 000 рублей, то для открытия собственного бизнеса
                    предоставляется возможность получить единовременное пособие, которое может достигать 350 000
                    рублей.</h2>
                <div className={styles.flipCardContainer}>
                    {flipCardData.map((data, index) => (
                        <FlipCard
                            key={index}
                            isOpen={flipSequence.includes(index) || activeCardIndex === index}
                            onClick={() => handleCardClick(index)}
                            num={data.num}
                            frontContent={data.frontContent}
                            backContent={data.backContent}
                            details={data.details}
                        />
                    ))}
                </div>
                <h2 className={styles.subtitle}>Социальный контракт заключается на срок от 3 до 12 месяцев в
                    зависимости от цели. Например, срок
                    действия контракта на открытие бизнеса составляет 12 месяцев, на поиск работы — 9 месяцев, на
                    преодоление сложной жизненной ситуации — максимум на 6 месяцев.</h2>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3>Малоимущие одинокие граждане</h3>
                            <p>Требование: среднедушевой доход за три последних месяца не
                                должен превышать прожиточный минимум по региону.</p>
                            <p>Описание: Размер выплат зависит от условий контракта.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3>Оказавшиеся безработными в период введения санкций</h3>
                            <p>Требование: учитывается период потери работы — с 1 марта 2022
                                года; на момент обращения должны иметь статус безработного. Для таких граждан период
                                заключения контракта установлен с 20 марта 2022 года по 31 декабря 2022 года</p>
                            <p>Описание: Финансовая поддержка для начала бизнеса</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3>Малообеспеченные граждане</h3>
                            <p>Требование: среднедушевой доход семьи за три последних месяца
                                не должен превышать прожиточный минимум на душу населения по региону.</p>
                            <p>Описание: Финансовая поддержка для развития подсобного хозяйства</p>
                        </div>
                    </div>
                </div>
                <p className={styles.subtitle}>При оценке материального состояния семьи учитывается имущественная
                    обеспеченность. Критерии
                    устанавливаются на уровне регионов и разнятся от субъекта к субъекту. Но если доход у семьи
                    небольшой, но при этом она владеет машиной и двумя квартирами, то вряд ли ей будет оказана
                    помощь. В
                    будущем оценку имущественной обеспеченности при заключении социального контракта планируют
                    осуществлять по аналогии с детскими выплатами.
                </p>
            </div>
        </div>
    );
};
export default SocialContract;
