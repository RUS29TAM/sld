import React from 'react';
import styles from './accordion.module.css'

const Accordion = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.accordion}>
                    <div className={styles.accordionItem} id="question1">
                        <a className={styles.accordionLink} href="#question1">
                            <div className={styles.flex}>
                                <h3>BRANDING</h3>
                                <ul>
                                    <li>#Figma</li>
                                    <li>#Sketch</li>
                                    <li>#Adobe</li>
                                    <li>#Invision</li>
                                    <li>#Protopie</li>
                                </ul>
                            </div>
                            <i className={`${styles.icon} ${styles.ionMdArrowForward}`}></i>
                            <i className={`${styles.icon} ${styles.ionMdArrowDown}`}></i>
                        </a>
                        <div className={styles.answer}>
                            <p> We believe in the greater good, we strive to do something for people, we aim to make
                                their lives easier and more enjoyable, we love businesses that keep this</p>
                        </div>
                        <hr/>
                    </div>
                    <div className={styles.accordionItem} id="question2">
                        <a className={styles.accordionLink} href="#question2">
                            <div className={styles.flex}>
                                <h3>UX/UI DESIGN</h3>
                                <ul>
                                    <li>#Figma</li>
                                    <li>#Sketch</li>
                                    <li>#Adobe</li>
                                    <li>#Invision</li>
                                    <li>#Protopie</li>
                                </ul>
                            </div>
                            <i className={`${styles.icon} ${styles.ionMdArrowForward}`}></i>
                            <i className={`${styles.icon} ${styles.ionMdArrowDown}`}></i>
                        </a>
                        <div className={styles.answer}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum.</p>
                        </div>
                        <hr/>
                    </div>
                    <div className={styles.accordionItem} id="question3">
                        <a className={styles.accordionLink} href="#question3">
                            <div className={styles.flex}>
                                <h3>FRONTEND DEVELOPMENT</h3>
                                <ul>
                                    <li>#Figma</li>
                                    <li>#Sketch</li>
                                    <li>#Adobe</li>
                                    <li>#Invision</li>
                                    <li>#Protopie</li>
                                </ul>
                            </div>
                            <i className={`${styles.icon} ${styles.ionMdArrowForward}`}></i>
                            <i className={`${styles.icon} ${styles.ionMdArrowDown}`}></i>
                        </a>
                        <div className={styles.answer}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum.</p>
                        </div>
                        <hr/>
                    </div>
                    <div className={styles.accordionItem} id="question4">
                        <a className={styles.accordionLink} href="#question4">
                            <div>
                                <h3>BACKEND DEVELOPMENT</h3>
                                <ul>
                                    <li>#Figma</li>
                                    <li>#Sketch</li>
                                    <li>#Adobe</li>
                                    <li>#Invision</li>
                                    <li>#Protopie</li>
                                </ul>
                            </div>
                            <i className={`${styles.icon} ${styles.ionMdArrowForward}`}></i>
                            <i className={`${styles.icon} ${styles.ionMdArrowDown}`}></i>
                        </a>
                        <div className={styles.answer}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum.</p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;
