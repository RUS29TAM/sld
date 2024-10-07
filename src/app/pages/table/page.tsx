'use client'
import React, { useState, useEffect } from 'react';
import styles from './table.module.css';

// import img1 from '@/app/images/img1.jpg';
// import img2 from '@/app/images/img2.jpg';
// import img3 from '@/app/images/img3.jpg';

const images = [
    { url: 'https://images.unsplash.com/photo-1727086564608-7abb296a677d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Ваш бизнес по франшизе', description1: 'При принятии решения о покупке франшизы необходимо заранее грамотно подготовиться. В этом случае применяются те же самые принципы, что и при выборе партнера или поставщика, и важно придерживаться принципа должной осмотрительности. Компетентный и опытный франчайзер готов ответить на любые ваши вопросы, и предоставит исчерпывающие разъяснения по каждому из них. В то время как компания, заинтересованная только в получении финансового взноса от франчайзи в качестве паушального платежа, может проявить недовольство таким интересом и жаждой информации. Не стесняйтесь создать список вопросов и подвергнуть своих потенциальных франчайзеров тщательному анализу. Мы предлагаем включить в ваш арсенал даже те вопросы, над которыми редко задумываются перед приобретением франшизы, но которые могут избежать неприятных ситуаций в будущем', description2: <a href={'/pages/franchise-hero'}>ФРАНЧАЙЗИНГ</a>},
    { url: 'https://images.unsplash.com/photo-1727707185480-a50e6090b58c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'SLIDER IMAGE MAGIC 2', description1: '2 Nulla magna irure incididunt Ex irure minim eiusmod......', description2: <a href={'/pages/solution-selection'}>решения</a> },
    { url: 'https://images.unsplash.com/photo-1727717901508-36ae470b697c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'SLIDER IMAGE MAGIC 3', description1: '3 Nulla magna irure incididunt Ex irure minim eiusmod......', description2: <a href={'/pages/business-plan'}>бизнес план</a> },
    { url: 'https://images.unsplash.com/photo-1727783851864-67d9d2e78ea1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'SLIDER IMAGE MAGIC 4', description1: '4 Nulla magna irure incididunt Ex irure minim eiusmod......', description2: <a href={'/pages/franchise-hero'}>районы</a> },
    { url: 'https://images.unsplash.com/photo-1690065564925-484069e3419f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'SLIDER IMAGE MAGIC 5', description1: '5 Nulla magna irure incididunt Ex irure minim eiusmod......', description2: <a href={'/pages/social-contract'}>соцконтракт</a> },
    { url: 'https://images.unsplash.com/photo-1727829441330-9a743f524085?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'SLIDER IMAGE MAGIC 6', description1: '6 Nulla magna irure incididunt Ex irure minim eiusmod......', description2: <a href={'/pages/two'}>any</a>}
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
            const diameter = Math.sqrt(width ** 2 + height ** 2);
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
                        style={{ backgroundImage: `url(${image.url})` }}
                    >
                        <div
                            className={styles.image}
                            style={{ backgroundImage: `url(${image.url})` }}
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
                <button className={`${styles.button}`} onClick={handlePrev} disabled={activeIndex === 0}>&larr;</button>
                <button className={`${styles.button}`} onClick={handleNext} disabled={activeIndex === images.length - 1}>&rarr;</button>
            </div>
        </section>
    );
};

export default Slider;
