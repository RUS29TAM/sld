import React, {useEffect} from 'react';
import '../../components/block/block.css'
import {blocksData} from '@/utils/blocksData';

interface IBlock {
    id: string;
    title: string;
    leftContent: string;
    rightContent: string;
    num: number;
}

const Block = ({id, title, leftContent, rightContent}: IBlock) => {
    return (
        <section className="block" id={id}>
            <input type="radio" id={`window-${id}`} name="windows" value={`window-${id}`}/>
            <div className="fwx-window">
                <label className="label" htmlFor={`window-${id}`}>
                    EXPLORE
                </label>

                <div className="left-content">
                    <h2>{title}</h2>
                    <p>{leftContent}</p>
                </div>

                <div className="right-content">
                    <p>{rightContent}</p>
                    <a href="javascript:void(0);" title="Learn More">
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