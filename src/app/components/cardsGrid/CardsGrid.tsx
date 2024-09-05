import React, { useState } from 'react';
import styles from './cards-grid.module.css';
import { contentData } from '@/utils/contentData'; // Импортируем массив данных из другого файла

const CardsGrid: React.FC = () => {
    // Состояние для отслеживания активной карточки и видимости контента
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showContent, setShowContent] = useState<boolean>(false);

    // Обработчик клика по карточке: скрывает карточки и показывает контент
    const handleCardClick = (index: number) => {
        setActiveIndex(index);
        setShowContent(true);
    };

    // Обработчик кнопки "Вернуться к выбору": показывает карточки и скрывает контент
    const handleBackClick = () => {
        setShowContent(false);
        setActiveIndex(null);
    };

    return (
        <div className={styles.container}>
            {/* Рендерим карточки, если контент скрыт */}
            {!showContent && (
                <>
                    <div className={styles.cardsRow}>
                        {contentData.slice(0, 4).map((item, index) => (
                            <div
                                key={index}
                                className={styles.card}
                                onClick={() => handleCardClick(index)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                    <div className={styles.cardsRow}>
                        {contentData.slice(4, 8).map((item, index) => (
                            <div
                                key={index + 4}
                                className={styles.card}
                                onClick={() => handleCardClick(index + 4)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Рендерим контент, если карточки скрыты */}
            {showContent && activeIndex !== null && (
                <div className={styles.contentContainer}>
                    <h2>{contentData[activeIndex].title}</h2>
                    <p>{contentData[activeIndex].content}</p>
                    <button className={styles.backButton} onClick={handleBackClick}>
                        Вернуться к выбору
                    </button>
                </div>
            )}
        </div>
    );
};

export default CardsGrid;
