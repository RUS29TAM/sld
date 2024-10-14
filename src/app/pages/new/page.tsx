import React from 'react';
import style from './new.module.css'
import Image from "next/image";
import first from '../../images/img1.jpg';
import second from '../../images/img2.jpg';
import third from '../../images/img3.jpg';


const Page = () => {
    return (
        <div className={`${style.carousel}`}>
            <div className={`${style.list}`}>
                {/*item 1*/}
                <div className={`${style.item}`}>
                    <Image className={`${style.img}`} width={10000} height={10000} src={first} alt="one"/>
                    <div className={`${style.intro}`}>
                        <div className={`${style.title}`}>DESIGN SLIDER</div>
                        <div className={`${style.topic}`}>Aerphone</div>
                        <div className={`${style.des}`}></div>
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
                        <div className={`${style.des}`}></div>
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
                        <div className={`${style.des}`}></div>
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
        </div>
    );
};

export default Page;
