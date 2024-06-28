'use client'
import React, {useState} from 'react';
import styles from './franchise.module.css'
import Modal from "@/app/components/modal/modal";
import {MdCurrencyRuble, MdOutlineStarBorderPurple500, MdSupportAgent} from "react-icons/md";
import {GoLaw} from "react-icons/go";
import {FaRegHandshake} from "react-icons/fa6";
import Link from "next/link";

const Page = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [popupContent, setPopupContent] = useState(null);

    const handleClickNum = (content: any) => {
            setPopupContent(content);
            setOpenPopup(true)
    };

    return (
        <div className={styles.container}>
            <div className={styles.timelineContainer}>
                {/*Individual timeline point*/}
                <div className={styles.timelinePoint}>
                    <i className={`${styles.faSolid} ${styles.faIcons}`}>
                        <div onClick={() => handleClickNum(<div className={styles.description}><p>Помогут Вам оценить качественные и количественные характеристики франчайзера, риски работы с
                            данной компанией, увидеть, насколько она серьезно подходит к построению сети и выбору
                            партнеров.</p><Link className={styles.link} href={'./solution-selection'}>Перейти к ознакомлению</Link></div>)} className={styles.faIcons}>1</div>
                    </i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}><MdOutlineStarBorderPurple500 /></div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Вопросы общего характера</div>
                        </div>
                    </div>
                </div>

                {/*Individual timeline point*/}
                <div className={styles.timelinePoint}>
                    <i className={`${styles.faSolid} ${styles.faCopyright}`}>
                        <div onClick={() => handleClickNum(<div className={styles.description}><p>&quot;Экономический блок&quot; вопросов поможет Вам оценить собственные ресурсы, грамотно
                            спланировать
                            бюджет открытия, рассчитать прибыль и необходимые дополнительные вливания. Кроме того, часто
                            франчайзеры занижают объем необходимых в открытие средств или не афишируют те или иные
                            платежи. Наша задача - узнать обо всем до принятия решения.
                            партнеров.</p><button>Далее</button></div>)} className={styles.faIcons}>2</div>
                    </i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}><MdCurrencyRuble /></div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Экономический блок вопросов</div>

                        </div>
                    </div>
                </div>

                {/*Individual timeline point */}
                <div className={styles.timelinePoint}>
                    <i className={`${styles.faSolid} ${styles.faBullseye}`}>
                        <div onClick={() => handleClickNum(<div className={styles.description}><p>Время переговоров на словах франчайзер может много всего обещать, но обращать внимание
                            всегда стоит на договор и его пункты. Чем более подробный договор Вы заключаете, тем меньше
                            вероятность внезапных решений франчайзера и негативных последствий. В идеале договор
                            франчайзинга состоит не менее чем из 20 листов и содержит подробную информацию о каждом
                            этапе сотрудничества и обязательствах сторон по всем аспектам.</p><button>Далее</button></div>)} className={styles.faIcons}>3</div>
                    </i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}><GoLaw /></div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Юридические касающиеся юридических аспектов</div>
                        </div>
                    </div>
                </div>

                {/*Individual timeline point*/}
                <div className={styles.timelinePoint}>
                    <i className={`${styles.faSolid} ${styles.faCompass}`}>
                        <div onClick={() => handleClickNum(<div className={styles.description}><p>То, как франчайзер отвечает на Ваши вопросы, показывает его отношение к своим партнерам и
                            готовность помогать на стадии запуска Вашего бизнеса</p><button>Далее</button></div>)} className={styles.faIcons}>4</div>
                    </i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}><MdSupportAgent /></div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Вопросы относящиеся к поддержке франчайзи</div>
                        </div>
                    </div>
                </div>

                {/*Individual timeline point*/}
                <div className={styles.timelinePoint}>
                    <i className={`${styles.faSolid} ${styles.faFaceGrinBeamSweat}`}>
                        <div onClick={() => handleClickNum(<div className={styles.description}><p>Необходимо быть готовым к любым жизненным ситуациям и понимать, на что франчайзер имеет
                            право в рамках договора, а в чем Вы ему можете отказать. И наоборот, что франчайзер может
                            контролировать в Вашем бизнесе и за что он может Вас штрафовать и наказывать, а за что может
                            даже отозвать франшизу.</p><button>Далее</button></div>)} className={styles.faIcons}>5</div>
                    </i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}><FaRegHandshake /></div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Вопросы партнерских взаимоотношений</div>
                        </div>
                    </div>
                </div>
            </div>
            {openPopup && <Modal setOpen={setOpenPopup}>{popupContent}</Modal>}
        </div>
    );
};

export default Page;
