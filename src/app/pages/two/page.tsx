
import React from 'react';
import Block from '../../components/block/block';
import { blocksData } from '@/utils/blocksData';
import './two.css'
import LoadingLane from "@/app/components/loading-lane/loading-lane";
const Page = () => {
    return (

        <>
            <LoadingLane/>

            <div className="box">

                <div className="navigation">
                    <ol>
                        {blocksData.map((block) => (
                            <li key={block.id}>
                                <a href={`#${block.id}`}>{block.id}</a>
                            </li>
                        ))}
                    </ol>
                </div>

                <article className="article">
                    {blocksData.map((block, index) => (
                        <Block key={index} {...block} />
                    ))}
                </article>

                <div className="preloader">
                    <img src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1920" height="1080" alt="preload"/>
                    <img src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1920" height="1080" alt="preload"/>
                    <img src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1920" height="1080" alt="preload"/>
                    <img src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1920" height="1080" alt="preload"/>
                    <img src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1920" height="1080" alt="preload"/>
                    <img src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1920" height="1080" alt="preload"/>
                    <img src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1920" height="1080" alt="preload"/>
                    <img src="https://images.unsplash.com/photo-1682687982049-b3d433368cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="1920" height="1080" alt="preload"/>
                </div>
            </div>
        </>

    );
};

export default Page;