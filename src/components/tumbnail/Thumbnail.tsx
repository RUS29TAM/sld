import React from 'react';
import styles from './thumbnail.module.css'
// import {carouselDom, itemSlider, itemThumbnail, listItemDom, nextDom, thumbnailDom} from "@/utils/constants";

const Thumbnail = () => {
    // if (nextDom) {
    //     nextDom.addEventListener('click', (event: MouseEvent) => {
    //         showSlider('next');
    //     });
    // }
    //
    // const showSlider = (type: string) => {
    //     let itemSlider = document.querySelectorAll('.carousel .list .item');
    //     let itemThumbnail = document.querySelectorAll('.carousel .thumbnail');
    //     console.log(carouselDom);
    //
    //     if (type === 'next') {
    //         if (listItemDom) {
    //             listItemDom.appendChild(itemSlider[0])
    //         }
    //         if (thumbnailDom) {
    //             thumbnailDom.appendChild(itemThumbnail[0])
    //         }
    //
    //         if (carouselDom) {
    //             carouselDom.classList.add('next');
    //         }
    //     }
    // }

    return (
        <>
            <div className={styles.thumbnail}>
                <div className={styles.item}>
                    <img className={styles.img}
                         src={'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                         alt={''}/>
                    <div className={styles.content}>
                        <div className={styles.title}>DESIGN SLIDER</div>
                        <div className={styles.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            amet
                            architecto beatae commodi consequuntur eos et exercitationem harum hic iusto labore, nemo
                            nihil
                            numquam obcaecati officia officiis ratione rerum sint?
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <img className={styles.img}
                         src={'https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                         alt={''}/>
                    <div className={styles.content}>
                        <div className={styles.title}>DESIGN SLIDER</div>
                        <div className={styles.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            amet
                            architecto beatae commodi consequuntur eos et exercitationem harum hic iusto labore, nemo
                            nihil
                            numquam obcaecati officia officiis ratione rerum sint?
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <img className={styles.img}
                         src={'https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                         alt={''}/>
                    <div className={styles.content}>
                        <div className={styles.title}>DESIGN SLIDER</div>
                        <div className={styles.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            amet
                            architecto beatae commodi consequuntur eos et exercitationem harum hic iusto labore, nemo
                            nihil
                            numquam obcaecati officia officiis ratione rerum sint?
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <img className={styles.img}
                         src={'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                         alt={''}/>
                    <div className={styles.content}>
                        <div className={styles.title}>DESIGN SLIDER</div>
                        <div className={styles.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            amet
                            architecto beatae commodi consequuntur eos et exercitationem harum hic iusto labore, nemo
                            nihil
                            numquam obcaecati officia officiis ratione rerum sint?
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.arrows}>
                {/*<button onClick={() => showSlider('prev')} className={styles.button} id="prev">{'<'}</button>*/}
                {/*<button onClick={() => showSlider('next')} className={styles.button} id="next">{'>'}</button>*/}
                <button className={styles.button} id="prev">{'<'}</button>
                <button className={styles.button} id="next">{'>'}</button>
            </div>
            <div className={styles.time}></div>
        </>
    );
};

export default Thumbnail;