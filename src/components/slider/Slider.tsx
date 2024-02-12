'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from './slider.module.css'

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [direction, setDirection] = useState<'next' | 'prev' | 'carousel'>('carousel');
    const [key, setKey] = useState<number>(0);

    const carouselRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const thumbnailBorderRef = useRef<HTMLDivElement>(null);
    const timeRef = useRef<HTMLDivElement>(null);

    const sliderItems = [
        {   src: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            author: 'RUS29TAM',
            title: 'WEB DESIGN & DEV',
            topic: 'ФРАНЧАЙЗИНГ',
            description: 'При принятии решения о покупке ' +
                'франшизы необходимо заранее грамотно подготовиться. В этом случае применяются те же самые принципы, ' +
                'что и при выборе партнера или поставщика, и важно придерживаться принципа должной осмотрительности. ' +
                'Компетентный и опытный франчайзер готов ответить на любые ваши вопросы, и предоставит исчерпывающие разъяснения по каждому из них. ' +
                'В то время как компания, заинтересованная только в получении финансового взноса от франчайзи в качестве паушального платежа, ' +
                'может проявить недовольство таким интересом и жаждой информации. Не стесняйтесь создать список вопросов и подвергнуть своих потенциальных франчайзеров тщательному анализу. ' +
                'Мы предлагаем включить в ваш арсенал даже те вопросы, над которыми редко задумываются перед приобретением франшизы, но которые могут избежать неприятных ситуаций в будущем.', },
        {   src: 'https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            author: 'RUS29TAM',
            title: 'WEB DESIGN & DEV',
            topic: 'СОЦКОНТРАКТ',
            description: 'Добро пожаловать в мир социальных контрактов!' +
                'Социальный контракт — это не просто бумага, это забота о каждом гражданине. ' +
                'Это соглашение между местным органом социальной защиты и тем, кто временно оказался в трудной жизненной ситуации. ' +
                'Мы разрабатываем индивидуальную «дорожную карту» действий, чтобы помочь вам преодолеть трудности.\n' +
                'Соглашение содержит конкретные шаги и меры поддержки. Мы готовы предложить различные формы помощи — социальные услуги, ' +
                'финансовую поддержку и многое другое. В свою очередь, вы обязуетесь выполнить договоренности — пройти обучение, найти работу или начать свое дело.\n' +
                'Наша главная цель — помочь вам вернуться на путь к самостоятельной жизни и стабильному доходу. ' +
                'Мы уверены, что вместе мы сможем преодолеть любые трудности и достичь успеха! И помните: мы здесь, чтобы поддержать вас на каждом этапе вашего пути к лучшей жизни.', },
        {   src: 'https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            author: 'RUS29TAM',
            title: 'WEB DESIGN & DEV',
            topic: 'РЕШЕНИЯ',
            description: 'Коробочное решение (или "готовое решение") в контексте начала предпринимательской деятельности\n' +
                'Это заранее разработанный набор инструкций, процессов, или ресурсов, позволяющий упростить запуск или управление существующим бизнесом. ' +
                'Это может включать в себя шаблоны для дизайна интерьера, меню, поставщиков, маркетинговые стратегии, ' +
                'и другие стандартизированные элементы необходимые для успешного старта. В частности, мы предлагаем шаблоны финансовых моделей, ' +
                'которые могут помочь вам лучше ориентироваться на этапе начала вашего предпринимательского пути.\n' +
                'Важно отметить, что представленные шаблоны финансовых моделей носят информационный характер и не адаптированы полностью под конкретный вид деятельности. ' +
                'Нашей главной целью является стимулирование вас к более детальному изучению всех аспектов выбранного вами направления развития. ' +
                'Для проработки качественной финансовой модели требуется должная подготовка и проявление вашего энтузиазма.', },
        {   src: 'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            author: 'RUS29TAM',
            title: 'WEB DESIGN & DEV',
            topic: 'БИЗНЕС ПЛАН',
            description: 'Добро пожаловать в мир успешного предпринимательства!\n' +
                'Бизнес-план — это не просто документ, это ваш надежный навигатор в мире бизнеса. Это подробный план вашего предприятия, который поможет вам добиться успеха.\n' +
                'Что включает в себя бизнес-план? Все! От описания вашей бизнес-идеи до стратегии маркетинга, от финансового плана до анализа конкурентов. ' +
                'Он выступает в роли вашего личного гида, указывая на ключевые моменты и помогая избежать преград на пути к успеху.\n' +
                'Зачем он нужен? Бизнес-план — это необходимый инструмент для привлечения инвестиций, партнерств и покупателей. ' +
                'Он помогает вам понять ваш рынок, цели, и как вы собираетесь их достичь.\n' +
                'Так что не откладывайте, начните с составления своего бизнес-плана сегодня! Это ваш первый шаг к процветающему бизнесу.', },
        // Add other slider items as needed
    ];

    const thumbnailItems = [
        { src: 'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Name Slider', description: 'Description', },
        { src: 'https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Name Slider', description: 'Description', },
        { src: 'https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Name Slider', description: 'Description', },
        { src: 'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Name Slider', description: 'Description', },
        // Add other thumbnail items as needed
    ];

    // const timeRunning = 3000;
    // const timeAutoNext = 7000;
    // let runTimeOut: NodeJS.Timeout | null = null;
    // let runNextAuto: NodeJS.Timeout | null = null;

    useEffect(() => {
        if (thumbnailBorderRef.current) {
            thumbnailBorderRef.current.appendChild(thumbnailBorderRef.current.children[0]);
        }
    }, [direction]);

    const showSlider = (type: 'next' | 'prev') => {
        if (sliderRef.current && thumbnailBorderRef.current && timeRef.current) {
            const sliderItemsDom = Array.from(sliderRef.current.children) as HTMLDivElement[];
            const thumbnailItemsDom = Array.from(thumbnailBorderRef.current.children) as HTMLDivElement[];

            if (type === 'next') {
                setDirection('next')
                setKey((prevKey) => prevKey + 1); // Увеличиваем key для перезапуска компонента
                sliderRef.current.appendChild(sliderItemsDom[0]);
                thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
                carouselRef.current?.classList.add('next');
            } else {
                setDirection('prev')
                setKey((prevKey) => prevKey + 1); // Увеличиваем key для перезапуска компонента
                sliderRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
                thumbnailBorderRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselRef.current?.classList.add('prev');
            }

            // if (runTimeOut) {
            //     clearTimeout(runTimeOut);
            // }
            //
            // runTimeOut = setTimeout(() => {
            //     carouselRef.current?.classList.remove('next', 'prev');
            // }, timeRunning);
            //
            // if (runNextAuto) {
            //     clearTimeout(runNextAuto);
            // }
            //
            // runNextAuto = setTimeout(() => {
            //     showSlider('next');
            // }, timeAutoNext);
        }
    };

    return (
        <div className={`${styles.carousel} ${direction === 'next' ? styles.next : 'carousel'} ${direction === 'prev' ? styles.prev : 'carousel'}`} ref={carouselRef}>
            {/* header and navigation */}

            {/* Slider */}
            <div className={styles.list} ref={sliderRef}>
                {sliderItems.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <img className={styles.img} src={item.src} alt={`Slide ${index + 1}`} />
                        <div className={styles.content}>
                            <div className={styles.author}>{item.author}</div>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.topic}>{item.topic}</div>
                            <div className={styles.des}>{item.description}</div>
                            <div className={styles.buttons}>
                                <button className={styles.button}>СМОТРЕТЬ</button>
                                <button className={styles.button}>ПОДПИСКА</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Thumbnail */}
            <div className={styles.thumbnail} ref={thumbnailBorderRef}>
                {thumbnailItems.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <img className={styles.img} src={item.src} alt={`Thumbnail ${index + 1}`} />
                        <div className={styles.content}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.description}>{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className={styles.arrows}>
                <button className={styles.button} onClick={() => showSlider('prev')}>&lt;</button>
                <button className={styles.button} onClick={() => showSlider('next')}>&gt;</button>
            </div>

            {/* Time running */}
            <div key={key} ref={timeRef} className={`${styles.time} ${direction === 'next' ? styles.next : ''} ${direction === 'prev' ? styles.prev : ''}`}></div>
        </div>
    );
};

export default Slider;