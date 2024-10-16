import React, {useState} from 'react';
import styles from './cards-grid.module.css';
import { contentData } from '@/utils/contentData';

const CardsGrid: React.FC = () => {
    // Состояние для отслеживания активной карточки и видимости контента
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false); // Состояние для анимации

    // Обработчик клика по карточке: скрывает карточки и показывает контент
    const handleCardClick = (index: number) => {
        setIsAnimating(true); // Начало анимации при скрытии карточек
        setTimeout(() => {
            setActiveIndex(index);
            setShowContent(true);
            setIsAnimating(false); // Окончание анимации
        }, 500)

    };

    // Обработчик кнопки "Вернуться к выбору": показывает карточки и скрывает контент
    const handleBackClick = () => {
        setIsAnimating(true); // Начало анимации при скрытии карточек
        setTimeout(() => {
            setShowContent(false);
            setActiveIndex(null);
            setIsAnimating(false); // Окончание анимации
        },500);
    };

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h1 className={`${styles.title} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>Ленский район</h1>
            <div className={`${styles.container} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
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
                    <div className={`${styles.contentContainer} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
                        <h3>{contentData[activeIndex].title}</h3>
                        <p>{contentData[activeIndex].content}</p>
                        <button className={styles.backButton} onClick={handleBackClick}>
                            Вернуться к выбору
                        </button>
                    </div>
                )}
            </div>
        </div>

    );
};

export default CardsGrid;
