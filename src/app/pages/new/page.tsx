'use client';
import React, {useRef, useState} from 'react';
import style from './new.module.css'
import Image, {StaticImageData} from "next/image";
import {slidesData} from "@/utils/slidersData";

interface Slide {
    id: number;
    image: StaticImageData; // Укажите тип, для локального изображения, или `string` для URL
    title: string;
    topic: string;
    description: string;
    detailTitle: string;
    detailDescription: string;
    specifications: { key: string; value: string }[];
}

interface CarouselProps {
    slides: Slide[];
}


const Page: React.FC<CarouselProps> = ({ slides })=> {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);
    const [isClickable, setClickable] = useState(true);
    const [showDetail, setShowDetail] = useState(false);

    const [startX, setStartX] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const showSlider = (type: 'next' | 'prev') => {
        if (!listRef.current || !isClickable) return;

        const items = listRef.current.children;
        setClickable(false);

        if (type === 'next') {
            listRef.current.appendChild(items[0]);
            carouselRef.current?.classList.add(style.next);
        } else {
            listRef.current.prepend(items[items.length - 1]);
            carouselRef.current?.classList.add(style.prev);
        }

        setTimeout(() => {
            setClickable(true);
            carouselRef.current?.classList.remove(style.next, style.prev);
        }, 2000);
    };

    const handleSeeMore = () => {
        setShowDetail(true);
        console.log('showDetail')
    };

    const handleGoBack = () => {
        setShowDetail(false);
        console.log('Go Back')
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        setIsDragging(true);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || startX === null) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const deltaX = clientX - startX;

        if (deltaX > 50) {
            showSlider('prev');
            setIsDragging(false); // Остановить перетаскивание после перелистывания
        } else if (deltaX < -50) {
            showSlider('next');
            setIsDragging(false); // Остановить перетаскивание после перелистывания
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        setStartX(null);
    };

    return (
        <div className={`${style.carousel} ${showDetail ? style.showDetail : ''}`}
             ref={carouselRef}
             onMouseDown={handleDragStart}
             onMouseMove={handleDragMove}
             onMouseUp={handleDragEnd}
             onMouseLeave={handleDragEnd}
             onTouchStart={handleDragStart}
             onTouchMove={handleDragMove}
             onTouchEnd={handleDragEnd}>
            <div className={`${style.list}`} ref={listRef}>
                {slidesData.map((slide) => (
                    <div key={slide.id} className={`${style.item}`}>
                        <Image className={`${style.img}`} width={10000} height={10000} src={slide.image} alt="slide" />
                        <div className={`${style.introduce}`}>
                            <div className={`${style.title}`}>{slide.title}</div>
                            <div className={`${style.topic}`}>{slide.topic}</div>
                            <div className={`${style.des}`}>{slide.description}</div>
                            <button className={`${style.seeMore}`} onClick={handleSeeMore}>See more &#8599;</button>
                        </div>
                        {showDetail && (
                            <div className={`${style.detail}`}>
                                <div className={`${style.title}`}>{slide.detailTitle}</div>
                                <div className={`${style.des}`}>{slide.detailDescription}</div>
                                <div className={`${style.specifications}`}>
                                    {slide.specifications.map((spec, index) => (
                                        <div className={`${style.div}`} key={index}>
                                            <p className={`${style.p}`}>{spec.key}</p>
                                            <p className={`${style.p}`} >{spec.value}</p>
                                        </div>
                                    ))}
                                    <div className={`${style.checkout}`}>
                                        <button className={`${style.button}`}>ADD TO CART</button>
                                        <button className={`${style.button}`}>CHECKOUT</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className={`${style.arrows}`}>
                <button className={`${style.prevBtn}`} onClick={() => showSlider('prev')} disabled={!isClickable}>&#8249;</button>
                {showDetail && <button className={`${style.backBtn}`} onClick={handleGoBack}>Go Back &#8599;</button>}
                <button className={`${style.nextBtn}`} onClick={() => showSlider('next')} disabled={!isClickable}>&#8250;</button>
            </div>
        </div>
    );
};

export default Page;
