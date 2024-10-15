'use client';
import React, {useRef, useState} from 'react';
import style from './new.module.css'
import Image from "next/image";
import first from '../../images/img1.jpg';
import second from '../../images/img2.jpg';
import third from '../../images/img3.jpg';
import fourth from '../../images/img4.jpg';
import fifth from '../../images/img5.jpg';
import sixth from '../../images/img6.jpg';


const Page: React.FC = () => {
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

        // Очистка классов и восстановление возможности клика
        setTimeout(() => {
            setClickable(true);
            carouselRef.current?.classList.remove(style.next, style.prev);
        }, 2000);
    };

    const handleSeeMore = () => {
        setShowDetail(true);
    };

    return (
        <div className={`${style.carousel} ${showDetail ? style.showDetail : ''}`} ref={carouselRef}>
            <div className={`${style.list}`} ref={listRef}>
                {/*item 1*/}
                <div className={`${style.item}`}>
                    <Image className={`${style.img}`} width={10000} height={10000} src={first} alt="one"/>
                    <div className={`${style.intro}`}>
                        <div className={`${style.title}`}>DESIGN SLIDER</div>
                        <div className={`${style.topic}`}>Aerphone</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos error fuga impedit magnam mollitia nulla sint. Blanditiis delectus earum est hic, minima perspiciatis, quis quod, repellendus sunt voluptatem voluptatum!</div>
                        <button className={`${style.seeMore}`}>See more &#8599;</button>
                    </div>
                    <div className={`${style.detail}`}>
                        <div className={`${style.title}`}>Aerphone LD</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className={`${style.specifications}`}>
                            <div>
                                <p>Used time</p>
                                <p>6 Hours</p>
                            </div>
                            <div>
                                <p>Charging port</p>
                                <p>Type - C</p>
                            </div>
                            <div>
                                <p>Compatible</p>
                                <p>Android</p>
                            </div>
                            <div>
                                <p>Bluetooth</p>
                                <p>5.3</p>
                            </div>
                            <div>
                                <p>Controlled</p>
                                <p>Touch</p>
                            </div>
                            <div className={`${style.checkout}`}>
                                <button className={`${style.addBtn}`}>ADD TO CART</button>
                                <button className={`${style.addBtn}`}>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*item 2*/}
                <div className={`${style.item}`}>
                    <Image className={`${style.img}`} width={10000} height={10000} src={second} alt="one"/>
                    <div className={`${style.intro}`}>
                        <div className={`${style.title}`}>DESIGN SLIDER</div>
                        <div className={`${style.topic}`}>Aerphone</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio ea esse explicabo ipsa laboriosam maiores nisi odit officia omnis, quae quo reiciendis sequi sunt ullam veniam, veritatis! Debitis, praesentium.</div>
                        <button className={`${style.seeMore}`}>See more &#8599;</button>
                    </div>
                    <div className={`${style.detail}`}>
                        <div className={`${style.title}`}>Aerphone LD</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className={`${style.specifications}`}>
                            <div>
                                <p>Used time</p>
                                <p>6 Hours</p>
                            </div>
                            <div>
                                <p>Charging port</p>
                                <p>Type - C</p>
                            </div>
                            <div>
                                <p>Compatible</p>
                                <p>Android</p>
                            </div>
                            <div>
                                <p>Bluetooth</p>
                                <p>5.3</p>
                            </div>
                            <div>
                                <p>Controlled</p>
                                <p>Touch</p>
                            </div>
                            <div className={`${style.checkout}`}>
                                <button className={`${style.addBtn}`}>ADD TO CART</button>
                                <button className={`${style.addBtn}`}>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*item 3*/}
                <div className={`${style.item}`}>
                    <Image className={`${style.img}`} width={10000} height={10000} src={third} alt="one"/>
                    <div className={`${style.intro}`}>
                        <div className={`${style.title}`}>DESIGN SLIDER</div>
                        <div className={`${style.topic}`}>Aerphone</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque culpa deserunt dolores et excepturi facilis in ipsum maxime minima necessitatibus obcaecati, praesentium provident quibusdam reprehenderit sed sunt ut vero.</div>
                        <button className={`${style.seeMore}`}>See more &#8599;</button>
                    </div>
                    <div className={`${style.detail}`}>
                        <div className={`${style.title}`}>Aerphone LD</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className={`${style.specifications}`}>
                            <div>
                                <p>Used time</p>
                                <p>6 Hours</p>
                            </div>
                            <div>
                                <p>Charging port</p>
                                <p>Type - C</p>
                            </div>
                            <div>
                                <p>Compatible</p>
                                <p>Android</p>
                            </div>
                            <div>
                                <p>Bluetooth</p>
                                <p>5.3</p>
                            </div>
                            <div>
                                <p>Controlled</p>
                                <p>Touch</p>
                            </div>
                            <div className={`${style.checkout}`}>
                                <button className={`${style.addBtn}`}>ADD TO CART</button>
                                <button className={`${style.addBtn}`}>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*item 4*/}
                <div className={`${style.item}`}>
                    <Image className={`${style.img}`} width={10000} height={10000} src={fourth} alt="one"/>
                    <div className={`${style.intro}`}>
                        <div className={`${style.title}`}>DESIGN SLIDER</div>
                        <div className={`${style.topic}`}>Aerphone</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet atque consectetur culpa dolorum eos in laudantium nemo optio quas quasi, quibusdam quisquam quod repellat sapiente sint tempore velit voluptatibus?</div>
                        <button className={`${style.seeMore}`}>See more &#8599;</button>
                    </div>
                    <div className={`${style.detail}`}>
                        <div className={`${style.title}`}>Aerphone LD</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className={`${style.specifications}`}>
                            <div>
                                <p>Used time</p>
                                <p>6 Hours</p>
                            </div>
                            <div>
                                <p>Charging port</p>
                                <p>Type - C</p>
                            </div>
                            <div>
                                <p>Compatible</p>
                                <p>Android</p>
                            </div>
                            <div>
                                <p>Bluetooth</p>
                                <p>5.3</p>
                            </div>
                            <div>
                                <p>Controlled</p>
                                <p>Touch</p>
                            </div>
                            <div className={`${style.checkout}`}>
                                <button className={`${style.addBtn}`}>ADD TO CART</button>
                                <button className={`${style.addBtn}`}>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*item 5*/}
                <div className={`${style.item}`}>
                    <Image className={`${style.img}`} width={10000} height={10000} src={fifth} alt="one"/>
                    <div className={`${style.intro}`}>
                        <div className={`${style.title}`}>DESIGN SLIDER</div>
                        <div className={`${style.topic}`}>Aerphone</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad culpa, deserunt, dicta doloribus ea error excepturi exercitationem facere labore libero modi natus odio perferendis possimus repudiandae soluta vel voluptatum.</div>
                        <button className={`${style.seeMore}`}>See more &#8599;</button>
                    </div>
                    <div className={`${style.detail}`}>
                        <div className={`${style.title}`}>Aerphone LD</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className={`${style.specifications}`}>
                            <div>
                                <p>Used time</p>
                                <p>6 Hours</p>
                            </div>
                            <div>
                                <p>Charging port</p>
                                <p>Type - C</p>
                            </div>
                            <div>
                                <p>Compatible</p>
                                <p>Android</p>
                            </div>
                            <div>
                                <p>Bluetooth</p>
                                <p>5.3</p>
                            </div>
                            <div>
                                <p>Controlled</p>
                                <p>Touch</p>
                            </div>
                            <div className={`${style.checkout}`}>
                                <button className={`${style.addBtn}`}>ADD TO CART</button>
                                <button className={`${style.addBtn}`}>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*item 6*/}
                <div className={`${style.item}`}>
                    <Image className={`${style.img}`} width={10000} height={10000} src={sixth} alt="one"/>
                    <div className={`${style.intro}`}>
                        <div className={`${style.title}`}>DESIGN SLIDER</div>
                        <div className={`${style.topic}`}>Aerphone</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, earum, esse? At beatae dolor eligendi exercitationem iste quas, tempore ullam ut veritatis voluptates. Aperiam eligendi eos nisi! Debitis, possimus, quis?</div>
                        <button className={`${style.seeMore}`}>See more &#8599;</button>
                    </div>
                    <div className={`${style.detail}`}>
                        <div className={`${style.title}`}>Aerphone LD</div>
                        <div className={`${style.des}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className={`${style.specifications}`}>
                            <div>
                                <p>Used time</p>
                                <p>6 Hours</p>
                            </div>
                            <div>
                                <p>Charging port</p>
                                <p>Type - C</p>
                            </div>
                            <div>
                                <p>Compatible</p>
                                <p>Android</p>
                            </div>
                            <div>
                                <p>Bluetooth</p>
                                <p>5.3</p>
                            </div>
                            <div>
                                <p>Controlled</p>
                                <p>Touch</p>
                            </div>
                            <div className={`${style.checkout}`}>
                                <button className={`${style.addBtn}`}>ADD TO CART</button>
                                <button className={`${style.addBtn}`}>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${style.arrows}`}>
                <button onClick={() => showSlider('prev')} disabled={!isClickable} className={`${style.prevBtn}`} id="prevBtn">&#8249;</button>
                <button className={`${style.backBtn}`} id="backBtn">Go Back &#8599;</button>
                <button onClick={() => showSlider('next')} disabled={!isClickable} className={`${style.nextBtn}`} id="nextBtn">&#8250;</button>
            </div>
        </div>
    );
};

export default Page;
