'use client';
import React, {useRef, useState} from 'react';
import style from './new.module.css'
import Image, {StaticImageData} from "next/image";
import first from '../../images/img1.jpg';
import second from '../../images/img2.jpg';
import third from '../../images/img3.jpg';
import fourth from '../../images/img4.jpg';
import fifth from '../../images/img5.jpg';
import sixth from '../../images/img6.jpg';


const slidesData = [
    {
        id: 1,
        image: first,
        title: 'DESIGN SLIDER 1',
        topic: 'Aerphone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos error fuga impedit magnam mollitia nulla sint.',
        detailTitle: 'Aerphone LD',
        detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        specifications: [
            { key: 'Used time', value: '6 Hours' },
            { key: 'Charging port', value: 'Type - C' },
            { key: 'Compatible', value: 'Android' },
            { key: 'Bluetooth', value: '5.3' },
            { key: 'Controlled', value: 'Touch' },
        ],
    },
    {
        id: 2,
        image: second,
        title: 'DESIGN SLIDER 2',
        topic: 'Headphones',
        description: 'A new experience in sound.',
        detailTitle: 'Headphone X2',
        detailDescription: 'Experience the latest in headphone technology.',
        specifications: [
            { key: 'Used time', value: '8 Hours' },
            { key: 'Charging port', value: 'Micro USB' },
            { key: 'Compatible', value: 'iOS, Android' },
            { key: 'Bluetooth', value: '5.1' },
            { key: 'Controlled', value: 'Button' },
        ],
    },
    {
        id: 3,
        image: third,
        title: 'DESIGN SLIDER 3',
        topic: 'Aerphone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos error fuga impedit magnam mollitia nulla sint.',
        detailTitle: 'Aerphone LD',
        detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        specifications: [
            { key: 'Used time', value: '6 Hours' },
            { key: 'Charging port', value: 'Type - C' },
            { key: 'Compatible', value: 'Android' },
            { key: 'Bluetooth', value: '5.3' },
            { key: 'Controlled', value: 'Touch' },
        ],
    },
    {
        id: 4,
        image: fourth,
        title: 'DESIGN SLIDER 4',
        topic: 'Aerphone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos error fuga impedit magnam mollitia nulla sint.',
        detailTitle: 'Aerphone LD',
        detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        specifications: [
            { key: 'Used time', value: '6 Hours' },
            { key: 'Charging port', value: 'Type - C' },
            { key: 'Compatible', value: 'Android' },
            { key: 'Bluetooth', value: '5.3' },
            { key: 'Controlled', value: 'Touch' },
        ],
    },
    {
        id: 5,
        image: fifth,
        title: 'DESIGN SLIDER 5',
        topic: 'Aerphone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos error fuga impedit magnam mollitia nulla sint.',
        detailTitle: 'Aerphone LD',
        detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        specifications: [
            { key: 'Used time', value: '6 Hours' },
            { key: 'Charging port', value: 'Type - C' },
            { key: 'Compatible', value: 'Android' },
            { key: 'Bluetooth', value: '5.3' },
            { key: 'Controlled', value: 'Touch' },
        ],
    },
];

interface Slide {
    id: number;
    image: StaticImageData; // Укажите тип, если это локальные изображения, или `string` для URL
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

    return (
        <div className={`${style.carousel}`} ref={carouselRef}>
            <div className={`${style.list}`} ref={listRef}>
                {slidesData.map((slide) => (
                    <div key={slide.id} className={`${style.item}`}>
                        <Image className={`${style.img}`} width={10000} height={10000} src={slide.image} alt="slide" />
                        <div className={`${style.intro}`}>
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
                                        <div key={index}>
                                            <p>{spec.key}</p>
                                            <p>{spec.value}</p>
                                        </div>
                                    ))}
                                    <div className={`${style.checkout}`}>
                                        <button className={`${style.addBtn}`}>ADD TO CART</button>
                                        <button className={`${style.addBtn}`}>CHECKOUT</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className={`${style.arrows}`}>
                <button className={`${style.prevBtn}`} onClick={() => showSlider('prev')} disabled={!isClickable}>&#8249;</button>
                <button className={`${style.backBtn}`} onClick={() => setShowDetail(false)}>Go Back &#8599;</button>
                <button className={`${style.nextBtn}`} onClick={() => showSlider('next')} disabled={!isClickable}>&#8250;</button>
            </div>
        </div>
    );
};

export default Page;
