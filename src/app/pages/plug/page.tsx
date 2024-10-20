'use client'
import React, {useState} from 'react';
import styles from './plug.module.css'

const Page = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={`${styles.box}`}>
            <div className={`${styles.room}`}>
                <div className={`${styles.cuboid}`}>
                    <div className={`${styles.side}`}></div>
                    <div className={`${styles.side}`}></div>
                    <div className={`${styles.side}`}></div>
                </div>
                <div className={`${styles.oops}`}>
                    {isHovered
                        ?
                        <h2 className={`${styles.h2}`}>Угу! &nbsp;<span className={`${styles.emoji}`}>&#128578;</span></h2>
                        :
                        <h2 className={`${styles.h2}`}>ОЙ! &nbsp;<span className={`${styles.emoji}`}>&#128530;</span></h2>}
                    <p className={`${styles.p}`}>
                        Запрашиваемая страница находится в разработке
                        <span className={`${styles.emoji}`}> &#128064;</span>
                        Скоро здесь появиться контент
                        {isHovered ? <span className={`${styles.emoji}`}>&#128512;</span> :
                            <span className={`${styles.emoji}`}>&#128521;</span>
                        }

                    </p>
                </div>
                <div className={`${styles.centerLine}`}>
                    <div className={`${styles.hole}`}>
                        <div className={`${styles.ladderShadow}`}></div>
                        <div className={`${styles.ladder}`}></div>
                    </div>
                    <div className={`${styles.four}`}>4</div>
                    <div className={`${styles.four}`}>4</div>
                    <div className={`${styles.btn}`}
                         >
                        <a onMouseEnter={handleMouseEnter}
                           onMouseLeave={handleMouseLeave}
                           className={`${styles.a}`} href="/pages/main">ВЕРНУТЬСЯ НАЗАД</a>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Page;
