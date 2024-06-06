'use client'
import React, { useEffect, useState } from 'react';
import styles from './local-page.module.css';

const SocialAssistance: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isScrolledBack, setIsScrolledBack] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('category');
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const isVisible = rect.top <= windowHeight && rect.bottom >= 0;

            setIsVisible(isVisible);
            setIsScrolledBack(window.scrollY <= windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
            <h2>Кто может получить единоразовую выплату</h2>
            <p>Есть три категории граждан, которые могут претендовать на выплату в размере 350 000 руб.</p>
            <div id="category" className={`${styles.category} ${isVisible && isScrolledBack ? styles.visible : ''}`}>
                <h3>Малоимущие одинокие граждане</h3>
                <p>Требование: среднедушевой доход за три последних месяца не должен превышать прожиточный минимум по региону.</p>
            </div>
            <div id="category" className={`${styles.category} ${isVisible && isScrolledBack ? styles.visible : ''}`}>
                <h3>Оказавшиеся безработными в период введения санкций</h3>
                <p>Требование: учитывается период потери работы — с 1 марта 2022 года; на момент обращения должны иметь статус безработного. Для таких граждан период заключения контракта установлен с 20 марта 2022 года по 31 декабря 2022 года</p>
            </div>
            <div id="category" className={`${styles.category} ${isVisible && isScrolledBack ? styles.visible : ''}`}>
                <h3>Малообеспеченные граждане</h3>
                <p>Требование: среднедушевой доход семьи за три последних месяца не должен превышать прожиточный минимум на душу населения по региону. Допустим, семья из трех человек проживает в Краснодаре. Зарплата мужа — 50 000 руб. Жена — домохозяйка, не работает. Есть ребенок-школьник. Величина прожиточного минимума в Краснодарском крае в расчете на душу населения в 2022 году составляет 12 148 руб. Месячный доход семьи — 50 000 руб., а среднедушевой — 16 600 руб. Эта сумма больше прожиточного минимума в регионе, поэтому семья не может воспользоваться социальным контрактом.</p>
            </div>
        </div>
    );
};

export default SocialAssistance;