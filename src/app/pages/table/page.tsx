'use client'
import React, { useState, useEffect } from 'react';
import styles from './table.module.css';

const images = [
    { url: 'https://2.downloader.disk.yandex.ru/preview/58f8a2d246d24ef7984c2a108b9c8a1a7a55a71bb4a1a14a6dfd810032e25235/inf/65Yk9O71dGuL5-jNidK-zi1UjWJv7M_kdzdqtWXw5SzFkytbMdQMgHsMUp4l3Fv-xXfvmt0ZaykOoNeX9_Y2jg%3D%3D?uid=869690319&filename=total%20body.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=869690319&tknv=v2&size=1903x911', title: 'Студия современного фитнеса', description1: 'total body', description2: <a className={styles.link} target={"_blank"} href={'https://www.total-body.online/'}>Посетить сайт</a> },
    { url: 'https://2.downloader.disk.yandex.ru/preview/de304d25501c2da112c968e6376bf1d41e42382fe036ffe53e0183da97a4005b/inf/HzF_G4fdLVzt5k0Voj1aiIbJo_rElCen7NVPYRPG71MPO0WLkZRRaHOSRiCyJil7sYrLDgiEGQpBxIZ2mNMcwA%3D%3D?uid=869690319&filename=STARFOODS..jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=869690319&tknv=v2&size=1903x911', title: 'Сеть ресторанов быстрого питания', description1: ' STARFOODS', description2: <a className={styles.link} target={"_blank"} href={'https://xn--80ai9acdcjh.xn--p1ai/'}>Посетить сайт</a>},
    { url: 'https://3.downloader.disk.yandex.ru/preview/866deecc5c0cf70ce04cd89cbc486f691955d02dc37f4bf3c7847e45712146f5/inf/6gRJhaZO_rfb4tGtZ7lFCAyhrArROmLDTKXaxuPAzDSOjCdYQ0c3XP0GH1L9P5Mph9iz6B_5gDD1UGq6Iq1pKQ%3D%3D?uid=869690319&filename=chibbis.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=869690319&tknv=v2&size=1903x911', title: 'Все о продвижении доставки еды', description1: 'chibbis', description2: <a className={styles.link} href={'https://academy.chibbis.ru/franshiza'}>Посетить сайт</a> },
    { url: 'https://4.downloader.disk.yandex.ru/preview/129535387e4810c55e2a031aef0193166d34c54b8db5303e21278684ec319bc9/inf/0OsXtgsIXExLEOdSbY2t47ZNcdo-zmiaZukMWe5jU5ZyZy8nBKYBfLYTlkHGnHf7QP3uV4F0Mu3YYqV7mLlgSQ%3D%3D?uid=869690319&filename=fishka..jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=869690319&tknv=v2&size=1903x911', title: 'Сеть доставки суши', description1: 'Fishka', description2: <a className={styles.link} target={"_blank"} href={'https://franchise-fishka.ru/'}>Посетить сайт</a> },
    { url: 'https://3.downloader.disk.yandex.ru/preview/ec96066022c63ab04491bb6ddb0c146a455e1e8f6dd6d7feb3e4520033b0416f/inf/gWOAM47Q7oZCTJaAhYUYySxAQNR470JuKymqbWlv-Jmvx7aEZSMTj0uWMMOvrahEy_TqHuTYqOWO63mgUoQXzQ%3D%3D?uid=869690319&filename=loveberry.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=869690319&tknv=v2&size=1903x911', title: 'клубничная студия', description1: 'loveberry', description2: <a className={styles.link} target={"_blank"} href={'https://www.loveberry.shop/'}>Посетить сайт</a> },
    { url: 'https://1.downloader.disk.yandex.ru/preview/6c6ec187b0b9ab8e8455f22cf5c396716ce98de2f05134660351384508efa643/inf/T4J3o-IOgc_m1NCXwH-qxGUv-9kbHBkQ9-O29hBeNQVa8DujpxKjJkyucHZ83TffJpTxIQ6CQ3UYkoP_4a8lRQ%3D%3D?uid=869690319&filename=aovk.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=869690319&tknv=v2&size=1903x911', title: 'Архангельский водорослевый комбинат', description1: 'Snow Sea', description2: <a className={styles.link} target={"_blank"} href={'https://vodoroslionline.ru/franshiza/'}>Посетить сайт</a>},
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
