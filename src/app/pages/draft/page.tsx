'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from './draft.module.css'

const SPIN_FORWARD_CLASS = styles.jsSpinFwd;
const SPIN_BACKWARD_CLASS = styles.jsSpinBwd;
const DISABLE_TRANSITIONS_CLASS = styles.jsTransitionsDisabled;
const SPIN_DUR = 1000;

const Page: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [limit, setLimit] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const $stage = useRef<HTMLDivElement | null>(null);
    const $controls = useRef<NodeListOf<HTMLAnchorElement> | null>(null);
    const canvas = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        assignEls();
        prepareDom();
        attachListeners();
    }, []);

    const appendControls = () => {
        console.log('Appending controls');
        const controls: JSX.Element[] = [];
        console.log(controls)
        for (let i = 0; i < limit; i++) {
            controls.push(<a href="#" key={i} data-index={i}></a>);
        }
        const height = $controls.current?.[0]?.offsetHeight || 0;
        $controls.current?.forEach((control, index) => {
            control.setAttribute('data-index', index.toString());
        });
        setLimit($controls.current?.length || 0);
        $controls.current?.[activeIndex]?.classList.add(styles.active);
    };

    const setIndexes = () => {
        $stage.current?.querySelectorAll(`.${styles.spinner} > .${styles.spinnerFace}`).forEach((el, index) => {
            el.setAttribute('data-index', index.toString());
            setLimit((prevLimit) => prevLimit + 1);
        });
    };

    const duplicateSpinner = () => {
        const spinnerParent = $stage.current?.querySelector(`.${styles.spinner}`)?.parentElement;
        const html = spinnerParent?.innerHTML || '';
        spinnerParent?.insertAdjacentHTML('beforeend', html);
        const lastSpinner = $stage.current?.querySelector(`.${styles.spinner}:last-child`);
        lastSpinner?.classList.add(styles.spinnerRight);
        lastSpinner?.classList.remove(styles.spinnerLeft);
    };

    const paintFaces = () => {
        $stage.current?.querySelectorAll(`.${styles.spinnerFace}`).forEach((el) => {
            const color = el.getAttribute('data-bg');
            el.querySelectorAll('*').forEach((child) => {
                if (child instanceof HTMLElement) {
                    child.style.backgroundImage = `url(${getBase64PixelByColor(color || '')})`;
                }
            });
        });
    };

    const getBase64PixelByColor = (hex: string): string | false => {
        if (!canvas.current) {
            canvas.current = document.createElement('canvas');
            canvas.current.height = 1;
            canvas.current.width = 1;
        }
        if (canvas.current.getContext) {
            const ctx = canvas.current.getContext('2d');
            if (ctx) {
                ctx.fillStyle = hex;
                ctx.fillRect(0, 0, 1, 1);
                return canvas.current.toDataURL();
            }
        }
        return false;
    };

    const prepareDom = () => {
        setIndexes();
        paintFaces();
        duplicateSpinner();
        appendControls();
    };

    const spin = (inc = 1) => {
        console.log('Spinning');
        if (disabled) return;
        if (!inc) return;
        setDisabled(true);

        // Удаление активного класса перед установкой нового
        $controls.current?.forEach((control) => {
            control.classList.remove(styles.active);
        });

        let newIndex = activeIndex + inc;

        if (newIndex >= limit) {
            newIndex = 0;
        }

        if (newIndex < 0) {
            newIndex = limit - 1;
        }

        const activeEls = Array.from($stage.current?.querySelectorAll(`.${styles.spinnerFace}.${styles.jsActive}`) || []);
        const nextEls = Array.from($stage.current?.querySelectorAll(`.${styles.spinnerFace}[data-index="${newIndex}"]`) || []);

        nextEls.forEach((el) => {
            el.classList.add(styles.jsNext);
        });

        if (inc > 0) {
            $stage.current?.classList.add(SPIN_FORWARD_CLASS);
        } else {
            $stage.current?.classList.add(SPIN_BACKWARD_CLASS);
        }

        $controls.current?.forEach((control) => {
            control.classList.remove(styles.active);
        });
        $controls.current?.[newIndex]?.classList.add(styles.active);

        setTimeout(() => {
            spinCallback(inc);
        }, SPIN_DUR);
    };

    const spinCallback = (inc: number) => {
        console.log('Spin callback');
        const activeEls = Array.from($stage.current?.querySelectorAll(`.${styles.jsActive}`) || []);
        const nextEls = Array.from($stage.current?.querySelectorAll(`.${styles.jsNext}`) || []);

        activeEls.forEach((el) => {
            el.classList.remove(styles.jsActive);
        });

        nextEls.forEach((el) => {
            el.classList.remove(styles.jsNext);
            el.classList.add(styles.jsActive);
            el.parentElement?.appendChild(el);
        });

        $stage.current?.classList.add(DISABLE_TRANSITIONS_CLASS);
        $stage.current?.classList.remove(SPIN_FORWARD_CLASS);
        $stage.current?.classList.remove(SPIN_BACKWARD_CLASS);

        setTimeout(() => {
            $stage.current?.classList.remove(DISABLE_TRANSITIONS_CLASS);
            setDisabled(false);

            $controls.current?.forEach((control) => {
                control.classList.remove(styles.active);
            });
            $controls.current?.[activeIndex]?.classList.add(styles.active);
            updateActiveControl(activeIndex);
        }, 100);
    };

    const attachListeners = () => {
        document.onkeyup = (e) => {
            switch (e.keyCode) {
                case 38:
                    spin(-1);
                    break;
                case 40:
                    spin(1);
                    break;
                default:
                    break;
            }
        };

        $controls.current?.forEach((control) => {
            control.addEventListener('click', (e) => {
                e.preventDefault();
                if (!disabled) {
                    const toIndex = parseInt(control.getAttribute('data-index') || '0', 10);
                    spin(toIndex - activeIndex);
                    setActiveIndex(toIndex);
                }
            });
        });
    };

    const assignEls = () => {
        $stage.current = document.querySelector(`.${styles.carouselStage}`);
        $controls.current = document.querySelectorAll(`.${styles.carouselControl} a`);
    };

    const updateActiveControl = (index: number) => {
        $controls.current?.forEach((control, i) => {
            if (i === index) {
                control.classList.add(styles.active);
            } else {
                control.classList.remove(styles.active);
            }
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <div className={styles.carouselControl}>
                    <a href="#" className={styles.a}></a>
                    <a href="#" className={styles.a}></a>
                    <a href="#" className={styles.a}></a>
                    <a href="#" className={styles.a}></a>

                </div>
                <div className={styles.carouselStage}>
                    <div className={`${styles.spinner} ${styles.spinnerLeft}`}>
                        <div className={`${styles.spinnerFace} ${styles.jsActive}`} data-bg="#27323c">
                            <div className={styles.content} datatype="ФРАНЧАЙЗИНГ">
                                <div className={styles.contentLeft}>
                                    <h1 className={styles.title}>ФРАНЧАЙЗИНГ<br/><span className={styles.subTitle}>Lorem ipsum dolor sit amet</span></h1>
                                </div>
                                <div className={styles.contentRight}>
                                    <div className={styles.contentMain}>
                                        <p className={styles.description}>Sed eros ut takimata ea sadipscing eum diam et dolor dolor sea voluptua elitr
                                            at mazim takimata invidunt lorem lorem eum possim voluptua sit duo magna
                                            sadipscing invidunt voluptua sit aliquip diam sea ipsum dolores stet sea et
                                            amet vero nonummy labore ut lorem rebum kasd velit facilisis eirmod
                                            consetetur dolor dolores elitr vel lorem magna hendrerit tempor iusto sit
                                            qui ullamcorper sit at nonumy augue labore diam eros stet dolore ea invidunt
                                            rebum kasd sea vero takimata aliquip takimata elitr et ipsum magna
                                            sadipscing esse lorem sed consetetur zzril placerat eos lorem ut lorem vero
                                            eirmod sed sed praesent </p>
                                        <p className={styles.description}>– RUS29TAM</p>
                                    </div>
                                    <h3 className={styles.contentIndex}>01</h3>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.spinnerFace}`} data-bg="#19304a">
                            <div className={styles.content} datatype="СОЦИАЛЬНЫЙ КОНТРАКТ">
                                <div className={styles.contentLeft}>
                                    <h1 className={styles.title}>СОЦИАЛЬНЫЙ КОНТРАКТ<br/><span className={styles.subTitle}>Lorem ipsum dolor sit amet</span></h1>
                                </div>
                                <div className={styles.contentRight}>
                                    <div className={styles.contentMain}>
                                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut
                                            autem, deserunt dignissimos enim explicabo fugiat, hic ipsum mollitia
                                            necessitatibus nobis obcaecati odio porro quae quis, recusandae tempora. Ut,
                                            veritatis!</p>
                                        <p className={styles.description}>– Damian Harper</p>
                                    </div>
                                    <h3 className={styles.contentIndex}>02</h3>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.spinnerFace}`} data-bg="#19304a">
                            <div className={styles.content} datatype="БИЗНЕС ПЛАН">
                                <div className={styles.contentLeft}>
                                    <h1 className={styles.title}>БИЗНЕС ПЛАН<br/><span className={styles.subTitle}>Lorem ipsum dolor sit amet</span></h1>
                                </div>
                                <div className={styles.contentRight}>
                                    <div className={styles.contentMain}>
                                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut
                                            autem, deserunt dignissimos enim explicabo fugiat, hic ipsum mollitia
                                            necessitatibus nobis obcaecati odio porro quae quis, recusandae tempora. Ut,
                                            veritatis!</p>
                                        <p className={styles.description}>– Damian Harper</p>
                                    </div>
                                    <h3 className={styles.contentIndex}>03</h3>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.spinnerFace}`} data-bg="#19304a">
                            <div className={styles.content} datatype="КОРОБОЧНЫЕ РЕШЕНИЯ">
                                <div className={styles.contentLeft}>
                                    <h1 className={styles.title}>КОРОБОЧНЫЕ РЕШЕНИЯ<br/><span className={styles.subTitle}>Lorem ipsum dolor sit amet</span></h1>
                                </div>
                                <div className={styles.contentRight}>
                                    <div className={styles.contentMain}>
                                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut
                                            autem, deserunt dignissimos enim explicabo fugiat, hic ipsum mollitia
                                            necessitatibus nobis obcaecati odio porro quae quis, recusandae tempora. Ut,
                                            veritatis!</p>
                                        <p className={styles.description}>– Damian Harper</p>
                                    </div>
                                    <h3 className={styles.contentIndex}>04</h3>
                                </div>
                            </div>
                        </div>
                        {/* Repeat the same structure for other spinner faces */}
                    </div>
                </div>
            </div>
            {/*<div style={{ height: 0, width: 0, overflow: 'hidden' }}>*/}
            {/*    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/peru.jpg" />*/}
            {/*    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/canada.jpg" />*/}
            {/*    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/china.jpg" />*/}
            {/*    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/usa.jpg" />*/}
            {/*    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/iceland.jpg" />*/}
            {/*</div>*/}
        </div>
    );
};

export default Page;