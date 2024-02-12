'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from './slider.module.css'

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [direction, setDirection] = useState<'next' | 'prev' | 'carousel'>('carousel');

    const carouselRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const thumbnailBorderRef = useRef<HTMLDivElement>(null);

    const sliderItems = [
        { src: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', author: 'RUS29TAM', title: 'WEB DESIGN & DEV', topic: 'SOME TOPIC', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...', },
        { src: 'https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', author: 'RUS29TAM', title: 'WEB DESIGN & DEV', topic: 'SOME TOPIC', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...', },
        { src: 'https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', author: 'RUS29TAM', title: 'WEB DESIGN & DEV', topic: 'SOME TOPIC', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...', },
        { src: 'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', author: 'RUS29TAM', title: 'WEB DESIGN & DEV', topic: 'SOME TOPIC', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...', },
        // Add other slider items as needed
    ];

    const thumbnailItems = [
        { src: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Name Slider', description: 'Description', },
        { src: 'https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Name Slider', description: 'Description', },
        { src: 'https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Name Slider', description: 'Description', },
        { src: 'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Name Slider', description: 'Description', },
        // Add other thumbnail items as needed
    ];

    // const timeRunning = 3000;
    // const timeAutoNext = 7000;
    // let runTimeOut: NodeJS.Timeout | null = null;
    // let runNextAuto: NodeJS.Timeout | null = null;

    useEffect(() => {
        if (thumbnailBorderRef.current) {
            thumbnailBorderRef.current.appendChild(thumbnailBorderRef.current.children[0]);
        }
    }, []);

    const showSlider = (type: 'next' | 'prev') => {
        if (sliderRef.current && thumbnailBorderRef.current) {
            const sliderItemsDom = Array.from(sliderRef.current.children) as HTMLDivElement[];
            const thumbnailItemsDom = Array.from(thumbnailBorderRef.current.children) as HTMLDivElement[];

            if (type === 'next') {
                setDirection('next')
                sliderRef.current.appendChild(sliderItemsDom[0]);
                thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
                carouselRef.current?.classList.add('next');
            } else {
                setDirection('prev')
                sliderRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                thumbnailBorderRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselRef.current?.classList.add('prev');
            }

            // if (runTimeOut) {
            //     clearTimeout(runTimeOut);
            // }
            //
            // runTimeOut = setTimeout(() => {
            //     carouselRef.current?.classList.remove('next', 'prev');
            // }, timeRunning);
            //
            // if (runNextAuto) {
            //     clearTimeout(runNextAuto);
            // }
            //
            // runNextAuto = setTimeout(() => {
            //     showSlider('next');
            // }, timeAutoNext);
        }
    };

    return (
        <div className={`${styles.carousel} ${direction === 'next' ? styles.next : 'carousel'} ${direction === 'prev' ? styles.prev : 'carousel'}`} ref={carouselRef}>
            {/* header and navigation */}

            {/* Slider */}
            <div className={styles.list} ref={sliderRef}>
                {sliderItems.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <img className={styles.img} src={item.src} alt={`Slide ${index + 1}`} />
                        <div className={styles.content}>
                            <div className={styles.author}>{item.author}</div>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.topic}>{item.topic}</div>
                            <div className={styles.des}>{item.description}</div>
                            <div className={styles.buttons}>
                                <button className={styles.button}>СМОТРЕТЬ</button>
                                <button className={styles.button}>ПОДПИСКА</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Thumbnail */}
            <div className={styles.thumbnail} ref={thumbnailBorderRef}>
                {thumbnailItems.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <img className={styles.img} src={item.src} alt={`Thumbnail ${index + 1}`} />
                        <div className={styles.content}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.description}>{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className={styles.arrows}>
                <button className={styles.button} onClick={() => showSlider('prev')}>&lt;</button>
                <button className={styles.button} onClick={() => showSlider('next')}>&gt;</button>
            </div>

            {/* Time running */}
            <div className={styles.time}></div>
        </div>
    );
};

export default Slider;