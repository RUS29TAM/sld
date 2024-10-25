'use client'
import React, {useEffect, useState} from 'react';
import styles from './countdown-timer.module.css';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC = () => {
    // Устанавливаем время события на 7 дней вперед
    const eventDate = new Date(new Date().getFullYear(), 9, 29, 13, 0, 0);
    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date();
        const difference = eventDate.getTime() - now.getTime();

        const timeLeft: TimeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };

        return timeLeft;
    };

    // Стейт для хранения оставшегося времени
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    // Обновляем таймер каждую секунду
    useEffect(() => {
        setTimeLeft(calculateTimeLeft()); // Инициализируем таймер только на клиенте
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        return null; // Возвращаем null при серверной рендеринга, пока данные не инициализировались на клиенте
    }

    // Функция для правильного склонения слов
    const getWordDeclension = (num: number, words: [string, string, string]) => {
        const cases = [2, 0, 1, 1, 1, 2];
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[Math.min(num % 10, 5)]];
    };

    // Функция для расчета процента для конусного градиента
    const getGradientPercentage = (current: number, total: number) => {
        return 360 - (current / total) * 360;
    };

    return (
        <div className={styles.countdown}>
            <h1 className={styles.h1}>Следующий бизнес десант состоится в Виноградовском округе через:</h1>
            <div className={styles.timer}>
                <div
                    className={styles.timeBox}
                    style={{
                        background: `conic-gradient(#101010 0deg, #7f4cff ${getGradientPercentage(timeLeft.days, 7)}deg, transparent 0deg)`
                    }}
                >
                    <span className={styles.number}>{timeLeft.days}</span>
                    <span className={styles.label}>
                        {getWordDeclension(timeLeft.days, ['день', 'дня', 'дней'])}
                    </span>
                </div>
                <div
                    className={styles.timeBox}
                    style={{
                        background: `conic-gradient(#101010 0deg, #7f4cff ${getGradientPercentage(timeLeft.hours, 24)}deg, transparent 0deg)`
                    }}
                >
                    <span className={styles.number}>{timeLeft.hours}</span>
                    <span className={styles.label}>
                        {getWordDeclension(timeLeft.hours, ['час', 'часа', 'часов'])}
                    </span>
                </div>
                <div
                    className={styles.timeBox}
                    style={{
                        background: `conic-gradient(#101010 0deg, #7f4cff ${getGradientPercentage(timeLeft.minutes, 60)}deg, transparent 0deg)`
                    }}
                >
                    <span className={styles.number}>{timeLeft.minutes}</span>
                    <span className={styles.label}>
                        {getWordDeclension(timeLeft.minutes, ['минута', 'минуты', 'минут'])}
                    </span>
                </div>
                <div
                    className={styles.timeBox}
                    style={{
                        background: `conic-gradient(rgba(127, 76, 255, 0.1) 0deg,  rgba(127, 76, 255, 0.3) ${getGradientPercentage(timeLeft.seconds, 60)}deg, transparent 0deg)`
                    }}
                >
                    <span className={styles.number}>{timeLeft.seconds}</span>
                    <span className={styles.label}>
                        {getWordDeclension(timeLeft.seconds, ['секунда', 'секунды', 'секунд'])}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
