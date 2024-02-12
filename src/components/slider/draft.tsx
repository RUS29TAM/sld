// 'use client'
// import React, {useEffect, useRef} from 'react';
// import styles from './slider.module.css'
// // import {carouselDom, itemSlider, itemThumbnail, listItemDom, nextDom, prevDom, thumbnailDom} from "@/utils/constants";
//
// const Draft = () => {
//     const nextDomRef = useRef<HTMLButtonElement | null>(null);
//     const prevDomRef = useRef<HTMLButtonElement | null>(null);
//     const carouselDomRef = useRef<HTMLDivElement | null>(null);
//     const sliderDomRef = useRef<HTMLDivElement | null>(null);
//     const thumbnailBorderDomRef = useRef<HTMLDivElement | null>(null);
//     const timeDomRef = useRef<HTMLDivElement | null>(null);
//     const thumbnailItemsDomRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
//
//     useEffect(() => {
//         nextDomRef.current = document.getElementById('next') as HTMLButtonElement | null;
//         prevDomRef.current = document.getElementById('prev') as HTMLButtonElement | null;
//         carouselDomRef.current = document.querySelector('.carousel') as HTMLDivElement | null;
//         sliderDomRef.current = carouselDomRef.current?.querySelector('.carousel .list') as HTMLDivElement | null;
//         thumbnailBorderDomRef.current = document.querySelector('.carousel .thumbnail') as HTMLDivElement | null;
//         timeDomRef.current = document.querySelector('.carousel .time') as HTMLDivElement | null;
//         thumbnailItemsDomRef.current = thumbnailBorderDomRef.current?.querySelectorAll('.item') as NodeListOf<HTMLDivElement> | null;
//
//         if (nextDomRef.current && prevDomRef.current) {
//             nextDomRef.current.onclick = () => showSlider('next');
//             prevDomRef.current.onclick = () => showSlider('prev');
//         }
//
//         const runNextAuto = setTimeout(() => {
//             nextDomRef.current?.click();
//         }, timeAutoNext);
//
//         return () => {
//             clearTimeout(runNextAuto);
//         };
//     }, []);
//
//     const showSlider = (type: string) => {
//         const sliderItemsDom = sliderDomRef.current?.querySelectorAll('.carousel .list .item') as NodeListOf<HTMLDivElement>;
//         const thumbnailItemsDom = thumbnailItemsDomRef.current;
//
//         if (
//             carouselDomRef.current &&
//             sliderDomRef.current &&
//             thumbnailBorderDomRef.current &&
//             thumbnailItemsDom &&
//             timeDomRef.current
//         ) {
//             if (type === 'next') {
//                 sliderDomRef.current.appendChild(sliderItemsDom[0]);
//                 thumbnailBorderDomRef.current.appendChild(thumbnailItemsDom[0]);
//                 carouselDomRef.current.classList.add('next');
//             } else {
//                 const lastItemIndex = sliderItemsDom.length - 1;
//                 sliderDomRef.current.prepend(sliderItemsDom[lastItemIndex]);
//                 thumbnailBorderDomRef.current.prepend(thumbnailItemsDom[lastItemIndex]);
//                 carouselDomRef.current.classList.add('prev');
//             }
//
//             clearTimeout(runTimeOut);
//             runTimeOut = setTimeout(() => {
//                 carouselDomRef.current?.classList.remove('next');
//                 carouselDomRef.current?.classList.remove('prev');
//             }, timeRunning);
//
//             clearTimeout(runNextAuto);
//             const newRunNextAuto = setTimeout(() => {
//                 nextDomRef.current?.click();
//             }, timeAutoNext);
//             runTimeOut = newRunNextAuto;
//         }
//         console.log(sliderDomRef)
//     };
//
//     const timeRunning = 3000;
//     const timeAutoNext = 7000;
//     let runTimeOut: NodeJS.Timeout;
//     let runNextAuto: NodeJS.Timeout;
//
//     return (
//         <>
//             <div className={`${styles.carousel} ${styles.next} ${styles.prev}`}>
//                 {/*<div className={`${styles.carousel}`}>*/}
//                 <div className={styles.list}>
//                     <div className={styles.item}>
//                         <img className={styles.img}
//                              src="https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                              alt=""/>
//                         <div className={styles.content}>
//                             <div className={styles.author}>RUS29TAM</div>
//                             <div className={styles.title}>WEB DESIGN & DEV</div>
//                             <div className={styles.topic}>SOME TOPIC</div>
//                             <div className={styles.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                                 Accusamus
//                                 amet
//                                 architecto beatae commodi consequuntur eos et exercitationem harum hic iusto labore,
//                                 nemo
//                                 nihil
//                                 numquam obcaecati officia officiis ratione rerum sint?
//                             </div>
//                             <div className={styles.buttons}>
//                                 <button className={styles.button}>СМОТРЕТЬ</button>
//                                 <button className={styles.button}>ПОДПИСКА</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.item}>
//                         <img className={styles.img}
//                              src="https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                              alt=""/>
//                         <div className={styles.content}>
//                             <div className={styles.author}>RUS29TAM</div>
//                             <div className={styles.title}>WEB DESIGN & DEV</div>
//                             <div className={styles.topic}>SOME TOPIC</div>
//                             <div className={styles.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                                 Accusamus
//                                 amet
//                                 architecto beatae commodi consequuntur eos et exercitationem harum hic iusto labore,
//                                 nemo
//                                 nihil
//                                 numquam obcaecati officia officiis ratione rerum sint?
//                             </div>
//                             <div className={styles.buttons}>
//                                 <button className={styles.button}>СМОТРЕТЬ</button>
//                                 <button className={styles.button}>ПОДПИСКА</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.item}>
//                         <img className={styles.img}
//                              src="https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                              alt=""/>
//                         <div className={styles.content}>
//                             <div className={styles.author}>RUS29TAM</div>
//                             <div className={styles.title}>WEB DESIGN & DEV</div>
//                             <div className={styles.topic}>SOME TOPIC</div>
//                             <div className={styles.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                                 Accusamus
//                                 amet
//                                 architecto beatae commodi consequuntur eos et exercitationem harum hic iusto labore,
//                                 nemo
//                                 nihil
//                                 numquam obcaecati officia officiis ratione rerum sint?
//                             </div>
//                             <div className={styles.buttons}>
//                                 <button className={styles.button}>СМОТРЕТЬ</button>
//                                 <button className={styles.button}>ПОДПИСКА</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.item}>
//                         <img className={styles.img}
//                              src="https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                              alt=""/>
//                         <div className={styles.content}>
//                             <div className={styles.author}>RUS29TAM</div>
//                             <div className={styles.title}>WEB DESIGN & DEV</div>
//                             <div className={styles.topic}>SOME TOPIC</div>
//                             <div className={styles.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                                 Accusamus
//                                 amet
//                                 architecto beatae commodi consequuntur eos et exercitationem harum hic iusto labore,
//                                 nemo
//                                 nihil
//                                 numquam obcaecati officia officiis ratione rerum sint?
//                             </div>
//                             <div className={styles.buttons}>
//                                 <button className={styles.button}>СМОТРЕТЬ</button>
//                                 <button className={styles.button}>ПОДПИСКА</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/*-----------------------thumbnail-----------------------*/}
//                 <div className={styles.thumbnail}>
//                     <div className={styles.item}>
//                         <img className={styles.img}
//                              src={'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
//                              alt={''}/>
//                         <div className={styles.content}>
//                             <div className={styles.title}>WEB DESIGN & DEV</div>
//                             <div className={styles.des}>Lorem ipsum dolor sit amet?
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.item}>
//                         <img className={styles.img}
//                              src={'https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
//                              alt={''}/>
//                         <div className={styles.content}>
//                             <div className={styles.title}>WEB DESIGN & DEV</div>
//                             <div className={styles.des}>Lorem ipsum dolor sit amet?
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.item}>
//                         <img className={styles.img}
//                              src={'https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
//                              alt={''}/>
//                         <div className={styles.content}>
//                             <div className={styles.title}>WEB DESIGN & DEV</div>
//                             <div className={styles.des}>Lorem ipsum dolor sit amet?
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.item}>
//                         <img className={styles.img}
//                              src={'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
//                              alt={''}/>
//                         <div className={styles.content}>
//                             <div className={styles.title}>WEB DESIGN & DEV</div>
//                             <div className={styles.des}>Lorem ipsum dolor sit amet?
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.arrows}>
//                     {/*<button onClick={() => showSlider('prev')} className={styles.button} id="prev">{'<'}</button>*/}
//                     {/*<button onClick={() => showSlider('next')} className={styles.button} id="next">{'>'}</button>*/}
//                     <button className={styles.button} id="prev">{'<'}</button>
//                     <button className={styles.button} id="next">{'>'}</button>
//                 </div>
//                 <div className={styles.time}></div>
//             </div>
//         </>
//
//     );
// };
//
// export default Draft;
/*
timeRef.current.innerHTML = ''; // Clear previous content
            const timeDiv = document.createElement('div');
            timeDiv.className = 'time';
            timeDiv.style.width = '0';
            timeDiv.style.height = '13px';
            timeDiv.style.backgroundColor = '#f1683a';
            timeDiv.style.zIndex = '100';
            timeDiv.style.position = 'absolute';
            timeDiv.style.top = '0';
            timeDiv.style.left = '0';
            timeRef.current.appendChild(timeDiv);
            */