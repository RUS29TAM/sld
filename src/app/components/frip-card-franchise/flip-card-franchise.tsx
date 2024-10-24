'use client';
import React, {useEffect, useState} from 'react';
import styles from './flip-card-franchise.module.css';
import {useTheme} from "@/app/ThemeContext";
import ScrollingAnimation from "@/app/components/scrolling-baner/scrolling-banner";

interface CardProps {
    frontText: string;
    backText: string;
    link: string;
    uniqueTextHeader: string;
    uniqueText: string;
}

const FlipCardFranchise: React.FC = () => {
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
    const [textContentHeader, setTextContentHeader] = useState<string>('Кликните карточку, чтобы увидеть больше информации.');
    const [textContent, setTextContent] = useState<string>('');
    const [flipSequence, setFlipSequence] = useState<number[]>([]);
    const {isDarkTheme} = useTheme();


    useEffect(() => {
        const sequence = async () => {
            for (let i = 0; i < cards.length; i++) {
                await new Promise((resolve) => setTimeout(resolve, 0)); // Задержка перед переворотом каждой карточки
                setFlipSequence((prev) => [...prev, i]);

                await new Promise((resolve) => setTimeout(resolve, 250)); // Держим карточку открытой
                setFlipSequence((prev) => prev.filter((index) => index !== i)); // Возвращаем карточку в исходное состояние
            }
        };
        sequence();
    }, []);


    const handleCardClick = (index: number) => {
        if (activeCardIndex === index) {
            setActiveCardIndex(null); // закрываем карточку, если она уже активна
            setTextContentHeader('Кликните карточку, чтобы увидеть больше информации.');
            setTextContent('');
        } else {
            setActiveCardIndex(index); // активируем выбранную карточку
            setTextContentHeader(cards[index].uniqueTextHeader); // обновляем текстовое поле
            setTextContent(cards[index].uniqueText); // обновляем текстовое поле

        }
    };

    const cards: CardProps[] = [
        {
            frontText: 'Региональные франшизы',
            backText: 'Франшизы от предпринимателей зарегистрированных в Архангельской области',
            link: '/pages/table',
            uniqueTextHeader: 'Региональные франшизы',
            uniqueText: 'Мы собрали для вас самые актуальные и перспективные франшизы, созданные местными предпринимателями. Это возможность не только начать дело, но и поддержать региональную экономику, развивая успешные бизнес-проекты, проверенные на практике.'
        },
        {
            frontText: 'Федеральные франшизы в регионе',
            backText: 'Предприниматели из Архангельской области, которые приобрели франшизу в другом регионе',
            link: '/pages/plug',
            uniqueTextHeader: 'Франшизы из других регионов',
            uniqueText: 'Вы также можете ознакомиться с франшизами, представленными в нашем регионе предпринимателями из других уголков страны. Это шанс перенять передовые бизнес-модели и привнести в регион новые, востребованные товары и услуги. Мы предлагаем проверенные решения, которые уже показали свою эффективность и стабильность.    '
        },
        {
            frontText: 'Как правильно подойти к выбору франшизы',
            backText: 'Главные вопросы о франчайзинге',
            link: '/pages/franchise',
            uniqueTextHeader: 'Методические материалы',
            uniqueText: 'Выбор франшизы — важное решение, которое требует тщательной подготовки. Мы разработали подробные методические материалы, которые помогут вам сориентироваться в процессе выбора и покупки франшизы. В них представлены практические советы по оценке финансовой модели, юридическим аспектам, а также стратегии взаимодействия с франчайзером. Этот материал поможет вам избежать типичных ошибок и принять обоснованное решение.'
        }
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {/* Верхний блок */}
                <div className={`${styles.firstBlock} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                    <h3>Добро пожаловать в раздел, посвященный развитию франчайзинга! Здесь вы найдете информацию
                        необходимую для старта и успешного ведения бизнеса по франшизной модели.</h3>
                </div>
                <div className={`${styles.secondBlock} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${
                                flipSequence.includes(index) || activeCardIndex === index ? styles.isFlipped : ''
                            }`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className={styles.cardInner}>
                                {/* Лицевая часть карточки */}
                                <div
                                    className={`${styles.cardFront} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                                    <p>{card.frontText}</p>
                                </div>
                                {/* Оборотная сторона карточки */}
                                <div
                                    className={`${styles.cardBack} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                                    <p>{card.backText}</p>
                                    <a className={`${styles.link}`} href={card.link} rel="noopener noreferrer">
                                        Перейти
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`${styles.thirdBlock} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                    <p style={{fontStyle: "italic"}}>{textContentHeader}:</p>
                    <p>{textContent}</p>
                </div>
                <div className={`${styles.fourthBlock} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                    <ScrollingAnimation/>
                </div>

            </div>
        </div>

    );
};

export default FlipCardFranchise;
