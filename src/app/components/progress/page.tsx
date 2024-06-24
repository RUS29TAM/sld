'use client'
import React, { useEffect } from 'react';
import styles from './progress.module.css';

const Page = () => {
    useEffect(() => {
        const indicator = document.getElementById('textValue'); // Получаем элемент по id

        if (!indicator) return; // Добавляем проверку на null

        const maxHeight = document.documentElement.scrollHeight - window.innerHeight;

        const scrollHandler = () => {
            const scrollRatio = window.scrollY / maxHeight;
            const angle = scrollRatio * 360;
            const percent = Math.round(scrollRatio * 100);

            indicator.style.background = `conic-gradient(from 0deg, #008eff 0%, #f00 ${angle}deg, transparent ${angle}deg)`;

            indicator.innerHTML = percent + '<span>%</span>'; // Используем innerHTML для вставки HTML контента
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler); // Очищаем обработчик события при размонтировании компонента
        };
    }, []); // Пустой массив зависимостей указывает на то, что эффект нужно запустить только один раз после монтирования компонента

    return (
        <div style={{height: ''}}>
            <div className={styles.scrollIndicator}>
                <div className={styles.text}>
                    <h2 className={styles.textValue} id="textValue"></h2>
                    <small>Прогресс</small>
                </div>
            </div>
        </div>

    );
};

export default Page;
