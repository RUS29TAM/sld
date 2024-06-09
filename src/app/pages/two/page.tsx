import React from 'react';
import styles from './two.module.css';
import Block from '../../components/block/block';
import {blocksData} from '@/utils/blocksData';
import LoadingLane from "@/app/components/loading-lane/loading-lane";

const Page = () => {
    return (
        <>
            <LoadingLane/>
            <div className={styles.box}>
                <div className={styles.navigation}>
                    <ol className={styles.ol}>
                        {blocksData.map((blocksData) => (
                            <li className={styles.li} key={blocksData.id}>
                                <a className={styles.a} href={`#${blocksData.id}`}>{blocksData.id}</a>
                            </li>
                        ))}
                    </ol>
                </div>

                <article className={styles.article}>
                    {blocksData.map((blocksData, index) => (
                        <Block key={index} {...blocksData} />
                    ))}
                </article>

                <div className={styles.preloader}>
                    <img className={styles.img}
                         src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         width="1920" height="1080" alt="preload"/>
                    <img className={styles.img}
                         src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         width="1920" height="1080" alt="preload"/>
                    <img className={styles.img}
                         src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         width="1920" height="1080" alt="preload"/>
                    <img className={styles.img}
                         src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         width="1920" height="1080" alt="preload"/>
                    <img className={styles.img}
                         src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         width="1920" height="1080" alt="preload"/>
                    <img className={styles.img}
                         src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         width="1920" height="1080" alt="preload"/>
                    <img className={styles.img}
                         src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         width="1920" height="1080" alt="preload"/>
                    <img className={styles.img}
                         src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         width="1920" height="1080" alt="preload"/>
                </div>
            </div>
        </>
    );
};

export default Page;
