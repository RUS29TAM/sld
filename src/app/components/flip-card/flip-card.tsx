import React, {useEffect, useState} from 'react';
import styles from './flip-card.module.css';

interface IFlipCard {
    num: string | number;
    frontContent: string;
    backContent: string;
    isOpen: boolean;
    onClick: () => void;
    details: string;
}

const FlipCard = ({num, details, frontContent, backContent, isOpen, onClick}: IFlipCard) => {
    const [isFlipped, setFlipped] = useState(false);

    useEffect(() => {
        setFlipped(isOpen);
    }, [isOpen]);

    const handleCardClick = () => {
        setFlipped(!isFlipped);
        onClick();
    };

    return (
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleCardClick}>
            <div className={styles.front}>{frontContent}</div>
            <div className={styles.back}>{backContent}</div>
        </div>
    );
};

export default FlipCard;