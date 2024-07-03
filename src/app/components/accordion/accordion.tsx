'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './Accordion.module.css';

const Accordion: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const toggleTab = (index: number) => {
        console.log(`Toggling tab: ${index}`);
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        if (wrapperRef.current) {
            const activeContent = wrapperRef.current.querySelector(`.${styles.content}.${styles.active}`);
            console.log('Active content:', activeContent);
            if (activeContent) {
                wrapperRef.current.style.minHeight = `${(activeContent as HTMLElement).offsetHeight}px`;
            }
        }
    }, [activeIndex]);

    useEffect(() => {
        toggleTab(0); // Open the first tab on load
    }, []);

    return (
        <div className={styles.container}>
            <div ref={wrapperRef} className={styles.wrapper}>
                <h1 className={`${styles.heading}`}>Responsive Accordion to Vertical Tab System</h1>
                <div className={styles.tabs}>
                    {[1, 2, 3].map((tab, index) => (
                        <React.Fragment key={index}>
                            <div className={styles.tab}>
                                <button
                                    className={`${styles.tabToggle} ${activeIndex === index ? styles.active : styles.tabToggle}`}
                                    onClick={() => toggleTab(index)}
                                >
                                    Tab {tab}
                                </button>
                            </div>
                            <div className={`${styles.content} ${activeIndex === index ? styles.active : ''}`}>
                                <h3 className={styles.heading}>Tab {tab} Content</h3>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis id, eos quo sed obcaecati itaque porro praesentium tempore, ratione quasi deleniti neque rem, recusandae. Tenetur mollitia optio possimus fugiat cumque.
                                </p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Accordion;
