'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from './slider.module.css'
import {sliderItems, thumbnailItems} from "@/utils/constants";
import Link from "next/link";

const Main = () => {
    const [loaded, setLoaded] = useState(false);
    const [animationInProgress, setAnimationInProgress] = useState(true);
    const [direction, setDirection] = useState<'next' | 'prev' | 'carousel'>('carousel');
    const [key, setKey] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const carouselRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const thumbnailBorderRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLoaded(true);

        if (thumbnailBorderRef.current) {
            thumbnailBorderRef.current.appendChild(thumbnailBorderRef.current.children[0]);
        }
    }, [direction]);

    const showSlider = (type: 'next' | 'prev' | 'thumbnail', index?: number) => {
        if (sliderRef.current && thumbnailBorderRef.current && timeRef.current) {
            const sliderItemsDom = Array.from(sliderRef.current.children) as HTMLDivElement[];
            const thumbnailItemsDom = Array.from(thumbnailBorderRef.current.children) as HTMLDivElement[];

            if (type === 'next') {
                setDirection('next')
                setKey((prevKey) => prevKey + 1); // Увеличиваем key для перезапуска компонента
                setActiveIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
                sliderRef.current.appendChild(sliderItemsDom[0]);
                thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
                carouselRef.current?.classList.add('next');
            } else if (type === 'prev'){
                setDirection('prev')
                setKey((prevKey) => prevKey + 1); // Увеличиваем key для перезапуска компонента
                setActiveIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
                setAnimationInProgress(false); // Устанавливаем, что анимация не в процессе
                sliderRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                thumbnailBorderRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselRef.current?.classList.add('prev');
            } else if (type === 'thumbnail' && index !== undefined) {
                const diff = (index - activeIndex + sliderItems.length) % sliderItems.length;
                if (diff > 0) {
                    setDirection('next')
                    setKey((prevKey) => prevKey + 1);
                    setActiveIndex(index);
                    for (let i = 0; i < diff; i++) {
                        sliderRef.current.appendChild(sliderItemsDom[i]);
                        thumbnailBorderRef.current.appendChild(thumbnailItemsDom[i]);
                    }
                    carouselRef.current?.classList.add('next');
                } else if (diff < 0) {
                    setDirection('prev')
                    setKey((prevKey) => prevKey + 1);
                    setActiveIndex(index);
                    for (let i = 0; i < -diff; i++) {
                        sliderRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1 - i]);
                        thumbnailBorderRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1 - i]);
                    }
                    carouselRef.current?.classList.add('prev');
                    }
            }
            /* TODO: вариант для автопрокрутки слайдов
            const timeRunning = 3000;
            const timeAutoNext = 7000;
            let runTimeOut: NodeJS.Timeout | null = null;
            let runNextAuto: NodeJS.Timeout | null = null;

             if (runTimeOut) {
                clearTimeout(runTimeOut);
            }

            runTimeOut = setTimeout(() => {
                carouselRef.current?.classList.remove('next', 'prev');
            }, timeRunning);

            if (runNextAuto) {
                clearTimeout(runNextAuto);
            }

            runNextAuto = setTimeout(() => {
                showSlider('next');
            }, timeAutoNext);
            */
        }
    };

    useEffect(() => {
        const handleTransitionEnd = () => {
           setTimeout(() => {
               setAnimationInProgress(true); // Сбрасываем состояние, когда анимация завершена
           },2000)
        };

        if (carouselRef.current) {
            carouselRef.current.addEventListener('transitionend', handleTransitionEnd);
        }

        return () => {
            if (carouselRef.current) {
                carouselRef.current.removeEventListener('transitionend', handleTransitionEnd);
            }
        };
    }, [carouselRef]);

    return (
        <>
            {/*<Header/>*/}
            <div
                className={`${styles.carousel} ${loaded ? styles.loaded : ''} ${direction === 'next' ? styles.next : 'carousel'} ${direction === 'prev' ? styles.prev : 'carousel'}`}
                ref={carouselRef}>
                {/* header and navigation */}
                {/* Page */}
                <div className={styles.list} ref={sliderRef}>
                    {sliderItems.map((item, index) => (
                        <div
                            className={`${styles.item} ${direction === 'next' ? styles.next : ''} ${direction === 'prev' ? styles.prev : ''} ${animationInProgress ? styles.animationInProgress : ''}`}
                            key={index}>
                            <img className={styles.img} src={typeof item.src === 'string' ? item.src : String(item.src)}
                                 alt={`Slide ${index + 1}`}/>
                            <div className={styles.content}>
                                <div className={styles.author}>{item.author}</div>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.topic}>{item.topic}</div>
                                <div className={styles.des}>{item.description}</div>
                                <div className={styles.buttonsWrapper}>
                                    <Link className={styles.button} href={'/pages/social-contract'}>СМОТРЕТЬ</Link>
                                    <Link className={styles.button} href={'/pages/loader'}>ПОДПИСКА</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Miniature */}
                <div className={styles.miniature} ref={thumbnailBorderRef}>
                    {thumbnailItems.map((item, index) => (
                        <div className={styles.item} onClick={() => showSlider('thumbnail', index)} key={index}>
                            <img className={styles.img} src={typeof item.src === 'string' ? item.src : String(item.src)}
                                 alt={`Thumbnail ${index + 1}`}/>
                            <div className={styles.content}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.description}>{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <div className={styles.arrowsWrapper}>
                    <button className={styles.buttonArrow} onClick={() => showSlider('prev')}>&lt;</button>
                    <button className={styles.buttonArrow} onClick={() => showSlider('next')}>&gt;</button>
                </div>

                {/* Time running */}
                <div
                    key={key}
                    ref={timeRef}
                    className={`${styles.time} ${direction === 'next' ? styles.next : ''} ${direction === 'prev' ? styles.prev : ''}`}></div>
            </div>
        </>

    );
};

export default Main;