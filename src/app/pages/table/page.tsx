'use client'
import React, { useState, useEffect } from 'react';
import styles from './table.module.css';

// import img1 from '@/app/images/img1.jpg';
// import img2 from '@/app/images/img2.jpg';
// import img3 from '@/app/images/img3.jpg';

const images = [
    { url: 'https://images.unsplash.com/photo-1727086564608-7abb296a677d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'SLIDER IMAGE MAGIC 1', description1: '1 Nulla magna irure incididunt...', description2: '1 Ex irure minim eiusmod...' },
    { url: 'https://images.unsplash.com/photo-1727707185480-a50e6090b58c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'SLIDER IMAGE MAGIC 2', description1: '2 Nulla magna irure incididunt...', description2: '2 Ex irure minim eiusmod...' },
    { url: 'https://images.unsplash.com/photo-1727717901508-36ae470b697c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'SLIDER IMAGE MAGIC 3', description1: '3 Nulla magna irure incididunt...', description2: '3 Ex irure minim eiusmod...' }
];

const Slider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

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
        <section className={`${styles.slider}`}>
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
