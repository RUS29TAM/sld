import React from 'react';
import styles from './block.module.css'

interface IBlock {
    id: string;
    title: string;
    leftContent: string;
    rightContent: string;
    num: number;
}

const Block = ({id, title, leftContent, rightContent}: IBlock) => {
    return (
        <section className={styles.block} id={id}>
            <input className={styles.input} type="radio" id={`window-${id}`} name="windows" value={`window-${id}`}/>
            <div className={styles.fwxWindow} id={'fwxWindow'}>
                <label className={styles.label} htmlFor={`window-${id}`}>
                    EXPLORE
                </label>

                <div className={styles.leftContent}>
                    <h2 className={styles.h2}>{title}</h2>
                    <p className={styles.p}>{leftContent}</p>
                </div>

                <div className={styles.rightContent}>
                    <p className={styles.p}>{rightContent}</p>
                    <a className={styles.a} href="##" title="Learn More">
                        Learn More
                    </a>
                </div>
            </div>
            {/* Навигационные ссылки */}
            {/*{blocksData.map((block, index) => (*/}
            {/*    <React.Fragment key={index}>*/}
            {/*        <a href={`#${block.id}`} title="Next Block" className="next-block">*/}
            {/*            &#8595;*/}
            {/*        </a>*/}
            {/*        <a href={`#${block.id}`} title="Prev Block" className="prev-block">*/}
            {/*            &#8593;*/}
            {/*        </a>*/}
            {/*    </React.Fragment>*/}
            {/*))}*/}
        </section>
    )
};

export default Block;