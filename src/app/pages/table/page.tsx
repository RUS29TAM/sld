'use client'
import React, { useState, useEffect } from 'react';
import styles from './table.module.css';

const images = [
    { url: 'https://static.tildacdn.com/tild3532-6264-4262-a261-613035623465/__-_2023-07-27T17595.jpg', title: 'Все о продвижении доставки еды', description1: 'chibbis', description2: <a className={styles.link} href={'https://academy.chibbis.ru/franshiza'}>Посетить сайт</a> },
    { url: 'https://play-lh.googleusercontent.com/S315zKj_Ogakz2HEQRzGHaletmEkv0FkCqcmKQrSmiLgM0r4LzKIebF_HNOdD1-3V9ei=h500', title: 'Сеть ресторанов быстрого питания', description1: ' STARFOODS', description2: <a className={styles.link} target={"_blank"} href={'https://xn--80ai9acdcjh.xn--p1ai/'}>Посетить сайт</a>},
    { url: 'https://vodoroslionline.ru/wa-data/public/photos/39/30/3039/3039.970.jpg', title: 'Архангельский водорослевый комбинат', description1: 'Snow Sea', description2: <a className={styles.link} target={"_blank"} href={'https://vodoroslionline.ru/franshiza/'}>Посетить сайт</a>},
    { url: 'https://sun9-40.userapi.com/impf/cBXVJ48QjGqJoKswa5rjOv_m-H3J3kd468UJhQ/73J5L7O5pVo.jpg?size=1818x606&quality=95&crop=194,0,1200,400&sign=750055b4392d6cdf6bd5b07aae69b0c8&type=cover_group', title: 'Студия современного фитнеса', description1: 'total body', description2: <a className={styles.link} target={"_blank"} href={'https://www.total-body.online/'}>Посетить сайт</a> },
    { url: 'https://sun9-76.userapi.com/s/v1/ig2/56pCr8BWyQgL9ElH7xBGP5QMWc6GKlFSYjBLSCRCw_sqqlYHnc25AIeSNfFpJ2o8zsi-OzltJ9eRfeqcOTSA-nFv.jpg?quality=95&blur=50,20&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1120x630&from=bu&u=mIb4DpWice_7GjdL63FPtmndcw4TkpJ5Nya9-M_z184&cs=807x454', title: 'Сеть доставки суши', description1: 'Fishka', description2: <a className={styles.link} target={"_blank"} href={'https://franchise-fishka.ru/'}>Посетить сайт</a> },
    { url: 'https://sun1-55.userapi.com/impg/RrrsalNvWOeAzFc-CvGKCnH3IyHEq2OctIPKcQ/GUnuaccnLF4.jpg?size=807x807&quality=95&sign=6624f64b69a55774586441eeffb20cc5&c_uniq_tag=KMD3-UMADrfpzukfhxkcnFoPU91Lh0EErOFLaZyoHG4&type=album', title: 'клубничная студия', description1: 'loveberry', description2: <a className={styles.link} target={"_blank"} href={'https://www.loveberry.shop/'}>Посетить сайт</a> },
    { url: 'https://images.unsplash.com/photo-1727829441330-9a743f524085?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Здесь может быть твоя франшиза', description1: 'Напиши мне и мы договоримся', description2: <a className={styles.link} href={'/pages/contacts'}>Контакты</a>}
];

const Slider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [startX, setStartX] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleNext = () => {
        if (activeIndex < images.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        setIsDragging(true);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || startX === null) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const deltaX = clientX - startX;

        if (deltaX > 50) {
            handlePrev();
            setIsDragging(false); // Остановить перетаскивание после перелистывания
        } else if (deltaX < -50) {
            handleNext();
            setIsDragging(false); // Остановить перетаскивание после перелистывания
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        setStartX(null);
    };

    useEffect(() => {
        const setDiameter = () => {
            const slider = document.querySelector(`.${styles.slider}`) as HTMLElement;
            const width = slider.offsetWidth;
            const height = slider.offsetHeight;
            // const diameter1 = Math.sqrt(width ** 2 + height ** 2);
            const diameter = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
            document.documentElement.style.setProperty('--diameter', `${diameter}px`);
        };

        setDiameter();
        window.addEventListener('resize', setDiameter);

        return () => window.removeEventListener('resize', setDiameter);
    }, []);


    return (
        <section className={`${styles.slider}`}
                 onMouseDown={handleDragStart}
                 onMouseMove={handleDragMove}
                 onMouseUp={handleDragEnd}
                 onMouseLeave={handleDragEnd}
                 onTouchStart={handleDragStart}
                 onTouchMove={handleDragMove}
                 onTouchEnd={handleDragEnd}>

            <div className={`${styles.list}`}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${styles.item} ${index === activeIndex ? styles.active : ''}`}
                        style={{ backgroundImage: `url(${image.url})`, backgroundSize: "cover", backgroundPosition: "center", width: '100vw', height: '100vh'}}
                    >
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url(${image.url})` , backgroundSize: "cover", backgroundPosition: "center", width: '100vw', height: '100vh' }}
                        />
                        <div className={`${styles.content}`}>
                            <h2 className={`${styles.h2}`}>{image.title}</h2>
                            <p className={`${styles.p}`}>{image.description1}</p>
                            <p className={`${styles.p}`}>{image.description2}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`${styles.arrows}`}>
                <button className={`${styles.button}`} onClick={handlePrev} disabled={activeIndex === 0}>&#10229;</button>
                <button className={`${styles.button}`} onClick={handleNext} disabled={activeIndex === images.length - 1 }>&#10230;</button>
            </div>
        </section>
    );
};

export default Slider;
